import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("1.000000000 EOSDT");
    const base = tokens["EOSDT"];
    const quote = tokens["EOS"];
    const code = "eosio.token-eos-eosdt";
    const type = "sell";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
