import { transfer } from "../eosio.token/actions";
import { Name, SymbolCode, Asset, name } from "eos-common";

export function marketbuy( from: Name, contract: Name, quantity: Asset, symcode: SymbolCode ) {
    return transfer(from, name("eos.gl"), contract, quantity, symcode.to_string() )
}