import * as utils from "../../../src/utils";
import { name, symbol, Name, number_to_asset, asset_to_number } from "eos-common";
import { rpc, api } from "../../../src/config"
import { swapSx, crossNewdex, flash, newdex, token } from "../../../plugins"
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    // get user balance
    const balance = await token.get_balance(rpc, base.get_contract(), account, base.get_symbol().code())

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base, quote );

    // newdex cross swaps
    const cross = number_to_asset( asset_to_number( out ), symbol("8,USDT"));

    // actions
    const actions = [
        swapSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        newdex.buymarket( account, name("issue.newdex"),  cross, "eos_usdt" ),
        crossNewdex.swap( account, name("tethertether"), out ),
        flash.checkbalance( account, base.get_contract(), balance )
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
