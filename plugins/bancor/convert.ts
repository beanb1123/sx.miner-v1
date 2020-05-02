import { SymbolCode, Asset, asset_to_number, number_to_asset, asset } from "eos-common";
import { get_symbol } from "../tokens";

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

export function calculate_fee( quantity: Asset, fee = 30 )
{
    // fee colleceted from incoming transfer (in basis points 1/100 of 1% )
    const calculated_fee = quantity.amount.multiply( fee ).divide( 10000 );

    // set minimum fee to smallest decimal of asset
    if ( fee > 0 && calculated_fee.greater(0) ) calculated_fee.plus(1);
    return asset( calculated_fee, quantity.symbol);
}

export function calculate_rate( quantity: Asset, out_symcode: SymbolCode, base: Asset, quote: Asset, fee = 30 )
{
    const calculated_fee = calculate_fee( quantity, fee );
    const out = calculate_out( Asset.minus( quantity, fee ), out_symcode, base, quote );
    return { out, fee: calculated_fee };
}