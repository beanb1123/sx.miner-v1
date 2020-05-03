import { transfer } from "../eosio.token/actions";
import { Name, Asset, name } from "eos-common";

export function sellmarket( from: Name, contract: Name, quantity: Asset, code = "eosio.token-eos-eosdt" ) {
    const memo = `{"type":"sell-market","symbol":"${code}","price":"0.0000","channel":"sx"}`;
    return transfer(from, name("newdexpublic"), contract, quantity, memo )
}

export function buymarket( from: Name, contract: Name, quantity: Asset, code = "eosio.token-eos-eosdt" ) {
    const memo = `{"type":"buy-market","symbol":"${code}","price":"0.0000","channel":"sx"}`;
    return transfer(from, name("newdexpublic"), contract, quantity, memo )
}
