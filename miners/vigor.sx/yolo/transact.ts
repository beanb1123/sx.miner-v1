import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { vigorSx, yolo, flash } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol ) {
    // calculations
    const rate = await vigorSx.get_calculate_rate( quantity, quote_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        flash.savebalance( account, [ base_ext_sym, quote_ext_sym ] ),
        vigorSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        yolo.buymarket( account, quote_ext_sym.get_contract(), rate, base_ext_sym ),
        flash.checkbalance( account, [ base_ext_sym, quote_ext_sym ] ),
    ]
    // push transaction
    return utils.transact( api, actions )
}