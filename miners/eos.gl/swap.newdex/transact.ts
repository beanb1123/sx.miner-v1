import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { gl, flash, swapNewdex } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, pair_id: number ) {
    // calculations
    const rate = await gl.get_calculate_rate( quantity, quote_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        flash.savebalance( account, [ base_ext_sym, quote_ext_sym ] ),
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        swapNewdex.buymarket( account, quote_ext_sym.get_contract(), rate, base_ext_sym, pair_id ),
        flash.checkbalance( account, [ base_ext_sym, quote_ext_sym ] ),
    ]
    // push transaction
    return utils.transact( api, actions )
}