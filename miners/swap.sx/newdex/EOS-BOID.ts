import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["BOID"];
    const quantity = number_to_asset(AMOUNT, base.get_symbol());

    // newdex
    const code = "boidcomtoken-boid-eos";
    const type = "sell";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
