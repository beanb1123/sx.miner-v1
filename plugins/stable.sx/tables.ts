import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode, amplifier = 20, fee = 20 ) {
    const pools = await sx.get_pools(rpc);

    return sx.get_rate( quantity, symcode, pools, { amplifier, fee } );
}
