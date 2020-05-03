import { transfer } from "../eosio.token/actions";
import { Name, Asset, name, SymbolCode } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, reserve: string, symcode: SymbolCode ) {
    const memo = `1,${reserve} ${symcode},0.0,${from}`;
    return transfer(from, name("thisisbancor"), contract, quantity, memo )
}
// bancorcnvrtr
// bnt2eoscnvrt
