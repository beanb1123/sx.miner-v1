import { JsonRpc } from "eosjs";
import { name, asset, Asset } from "eos-common";

// export async function get_reserve( rpc: JsonRpc, token_code: string, symcode: string ) {
//     return asset((await rpc.get_currency_balance(code, account, symbol))[0]);
// }

interface GetTableRows<T = any> {
    rows: T[];
    more: boolean;
    next_key: string;
}

interface Reserve {
    contract: string;
    ratio: number;
    balance: string;
}

export async function get_reserves( rpc: JsonRpc, token_code: string ) {
    const code = "bancorcnvrtr";
    const scope = token_code;
    const table = "reserves";
    const result: GetTableRows<Reserve> = await rpc.get_table_rows({ json: true, code, scope, table });

    const reserves: {[symcode: string]: Asset } = {};
    for ( const row of result.rows ) {
        const symcode = asset(row.balance).symbol.code();
        reserves[symcode.to_string()] = asset(row.balance);
    }
    return reserves;
}
