import { transact } from "./transact";
import { asset, name, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("10.0000000000 BNT");
    const base = tokens["BNT"];
    const quote = tokens["EOS"];
    const reserve = name("bnt2eoscnvrt");

    await transact( account, quantity, base, quote, reserve);
}

if (require.main === module) {
    mine(ACCOUNT);
}