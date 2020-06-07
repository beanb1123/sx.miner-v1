import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["USDE"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    // pizzadex
    const pair = "usdt2usde"
    const type = "sell"

    return await transact( account, quantity, base, quote, pair, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}