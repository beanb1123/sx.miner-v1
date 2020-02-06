import { transact } from "./utils";
import { AUTHORIZATION } from "./config";

export function autoconvert( owner: string, quantity: string ) {
    transact([
        {
            account: "stablestable",
            name: "autoconvert",
            authorization: AUTHORIZATION,
            data: {
                owner,
                quantity
            }
        }
    ])
}