import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("1.000000000 EOSDT");
    const base = tokens["EOS"];
    const quote = tokens["EOSDT"];
    const code = "eosio.token-eos-eosdt";
    const type = "sell";

    await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
