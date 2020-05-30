import { asset, SymbolCode } from "eos-common";
import { Asset } from "eos-common";
import { rpc } from "../../src/config"
import { calculate_rate } from "./convert"

export async function get_pair( pair_id: number ) {
    const response = await rpc.get_table_rows({json: true, code: "swap.newdex", scope: "swap.newdex", table: "pair", lower_bound: pair_id, upper_bound: pair_id });
    if ( !response.rows.length ) throw new Error(pair_id + " pair id cannot be found");
    const pair = response.rows[0];

    const base = asset(pair.base_quantity)
    const quote = asset(pair.quote_quantity)

    const result: {[symcode: string]: Asset} = {}
    result[base.symbol.code().to_string()] = base;
    result[quote.symbol.code().to_string()] = quote;

    return result
}

export async function get_calculate_rate( quantity: Asset, quote_symcode: SymbolCode, pair_id: number, fee = 30 ) {
    // get swap.newdex pair balances
    const pair = await get_pair( pair_id );
    const base = pair[ quantity.symbol.code().to_string() ];
    const quote = pair[ quote_symcode.to_string() ];

    // calculations
    return calculate_rate( quantity, quote_symcode, base, quote, fee );
}

(async () => {
    const rate = await get_calculate_rate(new Asset("1.0000 EOS"), new SymbolCode("EOSDT"), 13);
    console.log(rate.out.toString());
})()