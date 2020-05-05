import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // gl.swap
    const base = tokens["EOS"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(1, base.get_symbol()); // BNT => EOSDT

    // stable.sx
    const sx = tokens["USN"]; // EOSDT => USN

    // bancor
    const pair_id = 6; // USN => BNT

    return await transact( account, quantity, base, quote, sx, pair_id );
}

if (require.main === module) {
    mine(ACCOUNT);
}
