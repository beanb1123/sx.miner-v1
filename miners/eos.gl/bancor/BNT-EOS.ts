import { transact } from "./transact";
import { asset, name, Name, extended_symbol } from "eos-common";

export async function mine( account: Name ) {
    const BNT = extended_symbol("10,BNT", "bntbntbntbnt");
    const EOS = extended_symbol("4,EOS", "eosio.token");
    await transact( account, asset("10.0000000000 BNT"), BNT, EOS, name("bnt2eoscnvrt"));
}

(async () => {
    await mine(name("miner.gl"))
})()