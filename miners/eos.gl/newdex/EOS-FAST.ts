import { transact } from "./transact";
import { asset, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const quantity = asset("1.0000 EOS");
    const base = tokens["EOS"];
    const quote = tokens["FAST"];
    const code = "fastecoadmin-fast-eos";
    const type = "sell";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
