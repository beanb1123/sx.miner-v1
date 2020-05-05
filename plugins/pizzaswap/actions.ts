import { transfer } from "../eosio.token/actions";
import { Name, Asset, name } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, pair: string, price: number ) {
    const memo = `${pair}-swap-${price}`;
    return transfer(from, name("pzaswapcntct"), contract, quantity, memo )
}

// "eosd2usde-swap-0"
// pzaswapcntct