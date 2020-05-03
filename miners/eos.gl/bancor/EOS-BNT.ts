import { transact } from "./transact";
import { asset, name, Name, extended_symbol } from "eos-common";

export async function mine( account: Name ) {
    const EOS = extended_symbol("4,EOS", "eosio.token");
    const BNT = extended_symbol("10,BNT", "bntbntbntbnt");
    await transact( account, asset("1.0000 EOS"), EOS, BNT, name("bnt2eoscnvrt") );
}

(async () => {
    await mine(name("miner.gl"))
})()
