import { name, Asset, ExtendedSymbol } from "eos-common";
import { rpc } from "../../src/config"
import { swapSx, token } from ".."

export async function get_calculate_rate( quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, fee = 30 ) {
    // get swap.sx contract balance
    const base = await token.get_balance(rpc, base_ext_sym.get_contract(), name("swap.sx"), base_ext_sym.get_symbol().code())
    const quote = await token.get_balance(rpc, quote_ext_sym.get_contract(), name("swap.sx"), quote_ext_sym.get_symbol().code())

    // calculations
    return swapSx.calculate_rate( quantity, quote_ext_sym.get_symbol().code(), base, quote, fee );
}