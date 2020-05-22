import { transfer } from "../eosio.token/actions";
import { Name, Asset, name } from "eos-common";

export function swap( from: Name, contract: Name, quantity: Asset ) {
    const memo = `eos:${from}`;
    return transfer(from, name("cross.newdex"), contract, quantity, memo )
}
