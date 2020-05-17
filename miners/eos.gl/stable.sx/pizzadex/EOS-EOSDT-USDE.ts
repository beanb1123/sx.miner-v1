import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // gl.swap
    const base = tokens["EOS"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(2, base.get_symbol()); // EOS => EOSDT

    // stable.sx
    const sx = tokens["USDE"]; // EOSDT => USDE

    // pizzadex
    const pair = "eos2usde"; // USDE => EOS
    const type = "buy";

    return await transact( account, quantity, base, quote, sx, pair, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
