import { Name, number_to_asset, asset, name } from "eos-common";
import { transact } from "./transact";
import { tokens } from "../../../../src/tokens"
import { ACCOUNT, rpc } from "../../../../src/config";
import { pizzaswap } from "../../../../plugins"

export async function mine( account: Name ) {
    // gl.swap
    const base = tokens["EOS"];
    const quote = tokens["EOSDT"];
    const quantity = number_to_asset(1, base.get_symbol()); // EOS => EOSDT

    // stable.sx
    const sx = tokens["USDE"]; // EOSDT => USDE

    // pizzadex
    const pair = "eos2usde"; // USDE => EOS

    // calculate EOS price
    const price = await pizzaswap.get_price( rpc );

    return await transact( account, quantity, base, quote, sx, pair, price );
}

if (require.main === module) {
    mine(ACCOUNT);
}
