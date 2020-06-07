import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["USDB"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 3, base.get_symbol());

    // bancor
    const reserve = "bnt2eoscnvrt BNT bancorcnvrtr:BNTUSD";

    return await transact( account, quantity, base, quote, reserve);
}

if (require.main === module) {
    mine(ACCOUNT);
}