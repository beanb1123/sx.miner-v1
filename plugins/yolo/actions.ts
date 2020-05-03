import { transfer } from "../eosio.token/actions";
import { Name, Asset, name, ExtendedSymbol } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, extsym: ExtendedSymbol ) {
    const sym = extsym.get_symbol();
    const memo = `${sym.precision()} ${sym.code().to_string()},${extsym.get_contract()},0.0`;
    return transfer(from, name("yolonetworkx"), contract, quantity, memo )
}
// 4 EOS,eosio.token,0.0
// yolonetworkx
// yoreseosd111
