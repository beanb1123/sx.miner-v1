import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["USDE"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    // pizzadex
    const pair = "eos2usde"
    const type = "buy"

    return await transact( account, quantity, base, quote, pair, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}