import * as utils from "../../../src/utils";
import { name, symbol, Name, number_to_asset, asset_to_number } from "eos-common";
import { rpc, api } from "../../../src/config"
import { swapSx, crossNewdex, flash, newdex, token } from "../../../plugins"
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["USDT"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    // get user balance
    const balance = await token.get_balance(rpc, name("issue.newdex"), account, base.get_symbol().code())

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base, quote );

    // actions
    const actions = [
        crossNewdex.swap( account, name("tethertether"), quantity ),
        swapSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        newdex.sellmarket( account, quote.get_contract(), out, "eos_usdt" ),
        flash.checkbalance( account, base.get_contract(), balance ),
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
