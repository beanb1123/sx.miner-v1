import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("1.0000 USDT");
    const base = tokens["USDT"];
    const quote = tokens["EOSDT"];

    await transact( account, quantity, base, quote );
}

if (require.main === module) {
    mine(ACCOUNT);
}
