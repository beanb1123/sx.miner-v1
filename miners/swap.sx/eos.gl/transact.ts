import { Asset, Name, ExtendedSymbol } from "eos-common";
import { rpc, api } from "../../../src/config"
import { swapSx, flash, token, gl } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol ) {
    // get user balance
    const balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // actions
    const actions = [
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        gl.buymarket( account, quote_ext_sym.get_contract(), out, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), balance )
    ]

    // push transaction
    return utils.transact( api, actions )
}