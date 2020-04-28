import { Action, Authorization } from "eosjs/dist/eosjs-serialize";

export function borrow( to: string, contract: string, quantity: string, memo = "", notifiers?: string[], authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: to, permission: "active" } ],
        data: {
            to,
            contract,
            quantity,
            memo,
            notifiers: notifiers,
        }
    }
}

export function checkbalance( account: string, contract: string, quantity: string, authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: account, permission: "active" } ],
        data: {
            account,
            contract,
            quantity,
        }
    }
}