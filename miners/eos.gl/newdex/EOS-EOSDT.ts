import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const EOS = tokens["EOS"];
    const EOSDT = tokens["EOSDT"];
    await transact( account, asset("1.0000 EOS"), EOS, EOSDT, "eosio.token-eos-eosdt", "buy" );
}

if (require.main === module) {
    mine(ACCOUNT);
}
