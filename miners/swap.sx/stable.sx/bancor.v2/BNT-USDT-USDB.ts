import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // swap.sx
    const base = tokens["BNT"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT * 10, base.get_symbol()); // BNT => USDT

    // stable.sx
    const sx = tokens["USDB"]; // USDT => USDB

    // bancor
    const reserve = "bancorcnvrtr:BNTUSD"; // USDB => BNT

    return await transact( account, quantity, base, quote, sx, reserve );
}

if (require.main === module) {
    mine(ACCOUNT);
}
