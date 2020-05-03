import { JsonRpc } from "eosjs";
import { asset, Name, SymbolCode } from "eos-common";

export async function get_balance( rpc: JsonRpc, code: Name, account: Name, symbol?: SymbolCode ) {
    return asset((await rpc.get_currency_balance(code.to_string(), account.to_string(), symbol.to_string()))[0]);
}
