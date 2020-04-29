import { JsonRpc } from "eosjs";
import { extended_symbol } from "eos-common";

interface GetTableRows<T = any> {
    rows: T[];
    more: boolean;
    next_key: string;
}

interface Settings {
    fee: number;
    mining_rewards: number;
    mining_symbol: {
        sym: string;
        contract: string;
    };
}

export async function get_settings( rpc: JsonRpc ) {
    const code = "eos.gl";
    const scope = "eos.gl";
    const table = "settings";
    const result: GetTableRows<Settings> = await rpc.get_table_rows({ json: true, code, scope, table });

    return result.rows.map(row => {
        return {
            fee: row.fee,
            mining_rewards: row.mining_rewards,
            mining_symbol: extended_symbol( row.mining_symbol.sym, row.mining_symbol.contract ),
        }
    })[0]
}
