import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode, pool_fee = 4 ) {
    const settings = await sx.get_settings(rpc);
    const pools = await sx.get_pools(rpc);

    return sx.get_rate( quantity, symcode, pools, settings );
}
// `stablestable`