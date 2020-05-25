import * as utils from "../../../src/utils";
import { name, symbol, Name, number_to_asset, asset_to_number } from "eos-common";
import { api } from "../../../src/config"
import { swapSx, crossNewdex, flash, newdex } from "../../../plugins"
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base, quote );

    // newdex cross swaps
    const cross = number_to_asset( asset_to_number( out ), symbol("8,USDT"));

    // actions
    const actions = [
        flash.savebalance( account, base.get_contract(), base.get_symbol().code() ),
        swapSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        newdex.buymarket( account, name("issue.newdex"),  cross, "eos_usdt" ),
        crossNewdex.swap( account, name("tethertether"), out ),
        flash.checkbalance( account, base.get_contract(), base.get_symbol().code() ),
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
