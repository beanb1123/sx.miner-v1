import { Asset, Name, ExtendedSymbol } from "eos-common";
import { rpc, api } from "../../../../src/config"
import { flash, stableSx, token, bancor, swapSx } from "../../../../plugins"
import * as utils from "../../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, sx_ext_sym: ExtendedSymbol, reserve: string ) {
    // get user balance
    const base_balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // get `stablestable` contract balance
    const sx_rate = await stableSx.get_calculate_rate( out, sx_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        stableSx.buymarket( account, quote_ext_sym.get_contract(), out, sx_ext_sym.get_symbol().code() ),
        bancor.buymarket( account, sx_ext_sym.get_contract(), sx_rate.out, reserve, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), base_balance ),
    ]

    // push transaction
    return utils.transact( api, actions )
}