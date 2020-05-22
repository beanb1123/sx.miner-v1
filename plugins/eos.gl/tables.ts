import { JsonRpc } from "eosjs";
import { extended_symbol } from "eos-common";
import { name, Asset, ExtendedSymbol } from "eos-common";
import { rpc } from "../../src/config"
import { gl, token } from ".."

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

export async function get_calculate_rate( quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, fee = 30 ) {
    // get swap.sx contract balance
    const base = await token.get_balance(rpc, base_ext_sym.get_contract(), name("eos.gl"), base_ext_sym.get_symbol().code())
    const quote = await token.get_balance(rpc, quote_ext_sym.get_contract(), name("eos.gl"), quote_ext_sym.get_symbol().code())

    // calculations
    return gl.calculate_rate( quantity, quote_ext_sym.get_symbol().code(), base, quote, fee );
}