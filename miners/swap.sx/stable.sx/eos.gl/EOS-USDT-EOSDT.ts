import { Name, number_to_asset } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../../src/config";

export async function mine( account: Name ) {
    // swap.sx
    const base = tokens["EOS"];
    const quote = tokens["USDT"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol()); // EOS => USDT

    // stable.sx
    const sx = tokens["EOSDT"]; // USDT => EOSDT

    return await transact( account, quantity, base, quote, sx );
}

if (require.main === module) {
    mine(ACCOUNT);
}
