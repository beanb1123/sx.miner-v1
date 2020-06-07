import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode ) {
    const settings = await sx.get_settings( rpc, "stablestable" );
    const tokens = await sx.get_tokens( rpc, "stablestable" );

    return sx.get_rate( quantity, symcode, tokens, settings );
}
