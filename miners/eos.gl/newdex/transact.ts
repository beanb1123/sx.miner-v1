import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { gl, flash, newdex } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, code: string, type: string ) {
    // calculations
    const rate = await gl.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // actions
    const actions = [
        flash.savebalance( account, [ base_ext_sym, quote_ext_sym ] ),
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        (type == "buy") ? newdex.buymarket( account, quote_ext_sym.get_contract(), rate, code ) :
                          newdex.sellmarket( account, quote_ext_sym.get_contract(), rate, code ),
        flash.checkbalance( account, [ base_ext_sym, quote_ext_sym ] ),
    ]
    // push transaction
    return utils.transact( api, actions )
}