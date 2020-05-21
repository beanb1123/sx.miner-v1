import { name, Asset, Name, ExtendedSymbol } from "eos-common";
import { rpc, api } from "../../../src/config"
import { swapSx, flash, newdex, token } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, code: string, type: string ) {
    // get user balance
    const balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // get swap.sx contract balance
    const base = await token.get_balance(rpc, base_ext_sym.get_contract(), name("swap.sx"), base_ext_sym.get_symbol().code())
    const quote = await token.get_balance(rpc, quote_ext_sym.get_contract(), name("swap.sx"), quote_ext_sym.get_symbol().code())

    // calculations
    const { out } = swapSx.calculate_rate( quantity, quote_ext_sym.get_symbol().code(), base, quote, 30 );

    // actions
    const actions = [
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        (type == "buy") ? newdex.buymarket( account, quote_ext_sym.get_contract(), out, code ) :
                          newdex.sellmarket( account, quote_ext_sym.get_contract(), out, code ),
        flash.checkbalance( account, base_ext_sym.get_contract(), balance )
    ]
    // push transaction
    return utils.transact( api, actions )
}