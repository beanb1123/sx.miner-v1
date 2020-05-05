import { transfer } from "../eosio.token/actions";
import { Name, Asset, name, ExtendedSymbol } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, extsym: ExtendedSymbol, pair_id = 6 ) {
    const memo = `swap-${extsym.get_contract()}-${extsym.get_symbol().code()}-${pair_id}`;
    return transfer(from, name("swap.newdex"), contract, quantity, memo )
}
