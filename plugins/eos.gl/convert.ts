import { SymbolCode, Asset, asset_to_number, number_to_asset } from "eos-common";
import { get_symbol } from "../../src/tokens";

export function calculate_out( quantity: Asset, symcode_out: SymbolCode, base: Asset, quote: Asset )
{
    // convert to number
    const base_num = asset_to_number( base );
    const quote_num = asset_to_number( quote );
    const in_amount = asset_to_number( quantity );

    // Bancor V1 Formula
    const out_amount = in_amount / (base_num + in_amount) * quote_num;
    return number_to_asset( out_amount, get_symbol( symcode_out ) );
}

export function calculate_mining_rewards( fee: Asset, symcode_mining: SymbolCode, base: Asset, quote: Asset, mining_rewards = 11000 )
{
    const calculated_fee = Asset.times( fee, mining_rewards ).div( 10000 );
    return calculate_out( calculated_fee, symcode_mining, base, quote );
}

export function calculate_burn( fee: Asset, base: Asset, quote: Asset )
{
    return calculate_out( fee, quote.symbol.code(), base, quote );
}

export function calculate_fee( quantity: Asset, fee = 30 )
{
    // fee colleceted from incoming transfer (in basis points 1/100 of 1% )
    const calculated_fee = Asset.times( quantity, fee ).div( 10000 );

    // set minimum fee to smallest decimal of asset
    if ( fee > 0 && calculated_fee.amount.lesserOrEquals( 0 ) ) calculated_fee.plus(1);
    return calculated_fee;
}

export function calculate_rate( quantity: Asset, out_symcode: SymbolCode, base: Asset, quote: Asset, fee = 30 )
{
    const calculated_fee = calculate_fee( quantity, fee );
    return calculate_out( Asset.minus( quantity, calculated_fee ), out_symcode, base, quote );
}