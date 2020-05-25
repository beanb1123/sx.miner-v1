import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["USDT"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    return await transact( account, quantity, base, quote );
}

if (require.main === module) {
    mine(ACCOUNT);
}