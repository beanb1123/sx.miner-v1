import { transfer } from "../eosio.token/actions";
import { Name, Asset, name, SymbolCode } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, symcode: SymbolCode ) {
    const memo = `${symcode}`;
    return transfer(from, name("swap.sx"), contract, quantity, memo )
}
