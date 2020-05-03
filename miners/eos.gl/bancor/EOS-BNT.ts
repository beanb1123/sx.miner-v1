import { transact } from "./transact";
import { asset, name, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const EOS = tokens["EOS"];
    const BNT = tokens["BNT"];
    await transact( account, asset("1.0000 EOS"), EOS, BNT, name("bnt2eoscnvrt") );
}

if (require.main === module) {
    mine(ACCOUNT);
}