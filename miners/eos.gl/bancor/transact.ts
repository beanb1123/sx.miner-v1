import { name, Asset, Name, ExtendedSymbol } from "eos-common";
import { rpc, api } from "../../../src/config"
import { gl, bancor, flash, token } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, reserve: Name ) {
    // settings
    const settings = await gl.get_settings(rpc);

    // get user balance
    const balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // get eos.gl contract balance
    const base = await token.get_balance(rpc, base_ext_sym.get_contract(), name("eos.gl"), base_ext_sym.get_symbol().code())
    const quote = await token.get_balance(rpc, quote_ext_sym.get_contract(), name("eos.gl"), quote_ext_sym.get_symbol().code())

    // calculations
    const { out } = gl.calculate_rate( quantity, quote_ext_sym.get_symbol().code(), base, quote, settings.fee );

    // actions
    const actions = [
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        bancor.buymarket( account, quote_ext_sym.get_contract(), out, reserve, base.symbol.code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), balance )
    ]
    // push transaction
    utils.transact( api, actions )
}