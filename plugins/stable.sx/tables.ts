import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode, pool_fee = 4 ) {
    const settings: any = {
        pool_fee
    }
    return sx.get_rate( quantity, symcode, await sx.get_pools(rpc), settings );
}
// `stablestable`