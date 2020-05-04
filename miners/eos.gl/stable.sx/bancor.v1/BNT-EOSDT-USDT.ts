import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // gl.swap
    const base = tokens["BNT"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(10, base.get_symbol()); // BNT => EOSDT

    // stable.sx
    const sx = tokens["USDT"]; // EOSDT => USDT

    // bancor
    const reserve = "bancorc11232"; // USDT => BNT

    return await transact( account, quantity, base, quote, sx, reserve );
}

if (require.main === module) {
    mine(ACCOUNT);
}
