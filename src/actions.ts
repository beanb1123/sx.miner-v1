import { AUTHORIZATION, CONTRACT } from "./config";
import { Action } from "eosjs/dist/eosjs-serialize";

export function autoconvert( owner: string, quantity: string, symcodes: string[], profit: string ): Action {
    return {
        account: CONTRACT,
        name: "autoconvert",
        authorization: AUTHORIZATION,
        data: {
            owner,
            quantity,
            symcodes,
            profit
        }
    }
}