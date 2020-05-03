import { transact } from "./transact";
import { asset, name, Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["BNT"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(10, base.get_symbol());

    // bancor
    const reserve = name("bnt2eoscnvrt");

    return await transact( account, quantity, base, quote, reserve);
}

if (require.main === module) {
    mine(ACCOUNT);
}