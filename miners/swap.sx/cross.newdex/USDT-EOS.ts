import * as utils from "../../../src/utils";
import { name, Name, number_to_asset } from "eos-common";
import { api } from "../../../src/config"
import { swapSx, crossNewdex, flash, newdex } from "../../../plugins"
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["USDT"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base, quote );

    // actions
    const actions = [
        flash.savebalance( account, base.get_contract(), base.get_symbol().code() ),
        crossNewdex.swap( account, name("tethertether"), quantity ),
        swapSx.buymarket( account, base.get_contract(), quantity, quote.get_symbol().code() ),
        newdex.sellmarket( account, quote.get_contract(), out, "eos_usdt" ),
        flash.checkbalance( account, base.get_contract(), base.get_symbol().code() ),
    ]

    // push transaction
    return utils.transact( api, actions )
}

if (require.main === module) {
    mine(ACCOUNT);
}
