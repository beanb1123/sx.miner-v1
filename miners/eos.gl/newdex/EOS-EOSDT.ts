import { transact } from "./transact";
import { asset, Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(1, base.get_symbol());

    // newdex
    const code = "eosio.token-eos-eosdt";
    const type = "buy";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
