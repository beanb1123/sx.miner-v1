import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { AMOUNT, ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["CHEX"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 1500, base.get_symbol());

    // newdex
    const code = "chexchexchex-chex-eos";
    const type = "buy";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
