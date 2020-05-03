import { Action, Authorization } from "eosjs/dist/eosjs-serialize";
import { Name, Asset } from "eos-common";

export function transfer( from: Name, to: Name, contract: Name, quantity: Asset, memo = "", authorization?: Authorization[] ): Action {
    return {
        account: contract.to_string(),
        name: "transfer",
        authorization: authorization || [ { actor: from.to_string(), permission: "active" } ],
        data: {
            from: from.to_string(),
            to: to.to_string(),
            quantity: quantity.to_string(),
            memo
        }
    }
}
