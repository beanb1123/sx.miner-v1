import { name, symbol, Asset, Name, ExtendedSymbol, number_to_asset, asset_to_number } from "eos-common";
import { rpc, api } from "../../../src/config"
import { swapSx, crossNewdex, flash, newdex, token } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, code: string, type: string ) {
    // get user balance
    const balance = await token.get_balance(rpc, base_ext_sym.get_contract(), account, base_ext_sym.get_symbol().code())

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // cross USDT NewDex
    const newdex_out = number_to_asset( asset_to_number( out ), symbol("8,USDT"));

    // actions
    const actions = [
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        crossNewdex.swap( account, name("tethertether"), out ),
        newdex.buymarket( account, name("issue.newdex"), newdex_out, code ),
        flash.checkbalance( account, base_ext_sym.get_contract(), balance )
    ]

    // push transaction
    return utils.transact( api, actions )
}