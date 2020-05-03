import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const EOSDT = tokens["EOSDT"];
    const EOS = tokens["EOS"];
    await transact( account, asset("1.000000000 EOSDT"), EOSDT, EOS, "eosio.token-eos-eosdt", "sell" );
}

if (require.main === module) {
    mine(ACCOUNT);
}
