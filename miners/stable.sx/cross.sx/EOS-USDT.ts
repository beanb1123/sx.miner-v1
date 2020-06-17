import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";
import { Name, number_to_asset, asset_to_precision } from "eos-common";
import { api } from "../../../src/config"
import { stableSx, crossSx, flash, newdex } from "../../../plugins"
import * as utils from "../../../src/utils";


export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["USDT"];
    const cross = tokens["USDT@issue.newdex"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    // calculations
    const rate = await stableSx.get_calculate_rate( quantity, quote.get_symbol().code() );
    const rate_cross = asset_to_precision( rate, 8 );

    // newdex
    const code = "eos_usdt";

    // actions
    const actions = [
        flash.savebalance( account, [ base, quote ] ),
        stableSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        crossSx.swap( account, quote.get_contract(), rate ),
        newdex.buymarket( account, cross.get_contract(), rate_cross, code ),
        flash.checkbalance( account, [ base, quote ] ),
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
