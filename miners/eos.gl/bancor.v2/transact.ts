import { name, Asset, Name, ExtendedSymbol } from "eos-common";
import { rpc, api } from "../../../src/config"
import { gl, bancor, flash, token } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, reserve: string ) {
    // get user balance
    const balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // calculations
    const { out } = await gl.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // actions
    const actions = [
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        bancor.buymarket( account, quote_ext_sym.get_contract(), out, reserve, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), balance )
    ]
    // push transaction
    return utils.transact( api, actions )
}