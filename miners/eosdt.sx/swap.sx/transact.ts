import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { eosdtSx, flash, swapSx } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol ) {
    // calculations
    const { out } = await eosdtSx.get_calculate_rate( quantity, quote_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        flash.savebalance( account, [ base_ext_sym, quote_ext_sym ] ),
        eosdtSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        swapSx.buymarket( account, quote_ext_sym.get_contract(), out, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, [ base_ext_sym, quote_ext_sym ] ),
    ]

    // push transaction
    return utils.transact( api, actions )
}