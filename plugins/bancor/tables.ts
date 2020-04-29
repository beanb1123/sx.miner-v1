import { JsonRpc } from "eosjs";
import { name, asset } from "eos-common";

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

    return result.rows.map(row => {
        return {
            contract: name(row.contract),
            ratio: Number(row.ratio),
            balance: asset(row.balance),
        }
    })
}
