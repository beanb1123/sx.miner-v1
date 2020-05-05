import { name, Asset, Name, ExtendedSymbol } from "eos-common";
import * as sx from "sxjs";
import { rpc, api } from "../../../../src/config"
import { gl, flash, stable, token, pizzadex } from "../../../../plugins"
import * as utils from "../../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, sx_ext_sym: ExtendedSymbol, type: string, pair: string ) {
    // settings
    const gl_settings = await gl.get_settings(rpc);

    // get user balance
    const base_balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // get `eos.gl` contract balance
    const base = await token.get_balance(rpc, base_ext_sym.get_contract(), name("eos.gl"), base_ext_sym.get_symbol().code())
    const quote = await token.get_balance(rpc, quote_ext_sym.get_contract(), name("eos.gl"), quote_ext_sym.get_symbol().code())

    // calculations
    const { out } = gl.calculate_rate( quantity, quote_ext_sym.get_symbol().code(), base, quote, gl_settings.fee );

    // get `stablestable` contract balance
    const sx_settings = await sx.get_settings(rpc);
    const sx_pools = await sx.get_pools(rpc);
    const sx_rate = sx.get_rate( out, sx_ext_sym.get_symbol().code(), sx_pools, sx_settings );

    // actions
    const actions = [
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote.symbol.code() ),
        stable.buymarket( account, quote_ext_sym.get_contract(), out, sx_ext_sym.get_symbol().code() ),
        pizzadex.buymarket( account, sx_ext_sym.get_contract(), sx_rate.out, type, pair ),
        flash.checkbalance( account, base_ext_sym.get_contract(), base_balance ),
    ]

    // push transaction
    return utils.transact( api, actions )
}