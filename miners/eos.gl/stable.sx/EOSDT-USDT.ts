import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("1.000000000 EOSDT");
    const base = tokens["EOSDT"];
    const quote = tokens["USDT"];

    return await transact( account, quantity, base, quote );
}

if (require.main === module) {
    mine(ACCOUNT);
}
