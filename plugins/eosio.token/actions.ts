import { Action, Authorization } from "eosjs/dist/eosjs-serialize";

export function transfer( from: string, to: string, ext_quantity: { contract: string, quantity: string }, memo = "", authorization?: Authorization[] ): Action {
    return {
        account: ext_quantity.contract,
        name: "transfer",
        authorization: authorization || [ { actor: from, permission: "active" } ],
        data: {
            from,
            to,
            quantity: ext_quantity.quantity,
            memo
        }
    }
}
