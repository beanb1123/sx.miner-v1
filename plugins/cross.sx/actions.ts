import { transfer } from "../eosio.token/actions";
import { Name, Asset, name } from "eos-common";

export function swap( from: Name, contract: Name, quantity: Asset ) {
    return transfer(from, name("cross.sx"), contract, quantity, "" )
}
