import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // gl.swap
    const base = tokens["EOS"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol()); // EOS => USDT

    // stable.sx
    const sx = tokens["USN"]; // USDT => USN

    // newdex.swap
    const pair_id = 6; // USN => EOS

    return await transact( account, quantity, base, quote, sx, pair_id );
}

if (require.main === module) {
    mine(ACCOUNT);
}
