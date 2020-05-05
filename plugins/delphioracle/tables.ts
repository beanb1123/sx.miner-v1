import { JsonRpc } from "eosjs";

interface GetTableRows<T = any> {
    rows: T[];
    more: boolean;
    next_key: string;
}

interface Datapoints {
    id: number;
    owner: string;
    value: number;
    median: number;
    timestamp: string;
}

export async function get_datapoints( rpc: JsonRpc, pair: string, options = {limit: 1} ) {
    const code = "delphioracle";
    const scope = pair;
    const table = "datapoints";
    const result: GetTableRows<Datapoints> = await rpc.get_table_rows({ json: true, code, scope, table, limit: options.limit });

    return result.rows;
}

// eosusd
// delphioracle