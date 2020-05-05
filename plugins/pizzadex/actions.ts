import { transfer } from "../eosio.token/actions";
import { Name, Asset, name } from "eos-common";

export function buymarket( from: Name, contract: Name, quantity: Asset, pair: string, type: string ) {
    const memo = `${type}-${pair}-0-web-0`;
    return transfer(from, name("pzadexcntrct"), contract, quantity, memo )
}

// "sell-eos2usde-0-web-0"
