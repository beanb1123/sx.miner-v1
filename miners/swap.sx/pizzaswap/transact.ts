import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { swapSx, pizzaswap, flash } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, pair: string ) {
    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, quote_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        flash.savebalance( account, [ base_ext_sym, quote_ext_sym ] ),
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        pizzaswap.buymarket( account, quote_ext_sym.get_contract(), out, pair ),
        flash.checkbalance( account, [ base_ext_sym, quote_ext_sym ] ),
    ]
    // push transaction
    return utils.transact( api, actions )
}