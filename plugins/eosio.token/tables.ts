import { JsonRpc } from "eosjs";
import { Name, asset, SymbolCode } from "eos-common";

export async function get_balance( rpc: JsonRpc, code: string, account: string, symbol?: string ) {
    return asset((await rpc.get_currency_balance(code, account, symbol))[0]);
}
