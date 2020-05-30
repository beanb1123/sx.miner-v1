import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    // eos.gl
    const base = tokens["EOSDT"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    // swap.newdex
    const pair_id = 13;

    return await transact( account, quantity, base, quote, pair_id );
}

if (require.main === module) {
    mine(ACCOUNT);
}
