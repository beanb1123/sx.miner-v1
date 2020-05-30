import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../../src/config"
import { flash, stableSx, swapNewdex, swapSx } from "../../../../plugins"
import * as utils from "../../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, sx_ext_sym: ExtendedSymbol, pair_id: number ) {

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // get `stablestable` contract balance
    const swapRate = await swapNewdex.get_calculate_rate( out, sx_ext_sym.get_symbol().code(), pair_id );

    // console.log(swapRate);

    // actions
    const actions = [
        flash.savebalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        swapNewdex.buymarket( account, quote_ext_sym.get_contract(), out, sx_ext_sym, pair_id ),
        stableSx.buymarket( account, sx_ext_sym.get_contract(), swapRate.out, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
    ]

    // push transaction
    return utils.transact( api, actions )
}