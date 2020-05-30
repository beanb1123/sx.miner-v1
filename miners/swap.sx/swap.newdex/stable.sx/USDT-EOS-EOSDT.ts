import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // swap.sx
    const base = tokens["USDT"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol()); // USDT => EOS

    // swap.newdex
    const pair_id = 13; // EOS => EOSDT

    // stable.sx
    const sx = tokens["USDT"]; // EOSDT => USDT

    return await transact( account, quantity, base, quote, sx, pair_id );
}

if (require.main === module) {
    mine(ACCOUNT);
}
