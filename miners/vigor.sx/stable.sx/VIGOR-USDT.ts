import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["VIGOR"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    return await transact( account, quantity, base, quote);
}

if (require.main === module) {
    mine(ACCOUNT);
}