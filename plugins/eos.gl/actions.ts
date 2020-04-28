import { transfer } from "../eosio.token/actions";

export function marketbuy( from: string, ext_quantity: { contract: string, quantity: string }, symcode: string ) {
    return transfer(from, "eos.gl", ext_quantity, symcode )
}