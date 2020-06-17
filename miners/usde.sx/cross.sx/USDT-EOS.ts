import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";
import { Name, number_to_asset, asset_to_precision } from "eos-common";
import { api } from "../../../src/config"
import { usdeSx, crossSx, flash, newdex } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function mine( account: Name ) {
    const base = tokens["USDT"];
    const quote = tokens["EOS"];
    const cross = tokens["USDT@issue.newdex"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());
    const quantity_cross = asset_to_precision( quantity, 8 );

    // calculations
    const rate = await usdeSx.get_calculate_rate( quantity, quote.get_symbol().code() );

    // newdex
    const code = "eos_usdt";

    // actions
    const actions = [
        flash.savebalance( account, [ base, quote, cross ] ),
        usdeSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        newdex.sellmarket( account, quote.get_contract(), rate, code ),
        crossSx.swap( account, cross.get_contract(), quantity_cross ),
        flash.checkbalance( account, [ base, quote, cross ] ),
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
