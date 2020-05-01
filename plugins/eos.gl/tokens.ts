import { SymbolCode, ExtendedSymbol } from "eos-common";

export const tokens: { [symcode: string]: ExtendedSymbol } = {
    "FAST": new ExtendedSymbol("4,FAST", "fastecoadmin"),
    "EOS": new ExtendedSymbol("4,EOS", "eosio.token"),
    "GL": new ExtendedSymbol("4,GL", "token.gl"),
    "USDT": new ExtendedSymbol("4,USDT", "tethertether"),
    "BNT": new ExtendedSymbol("10,BNT", "bntbntbntbnt"),
    "PBTC": new ExtendedSymbol("8,PBTC", "btc.ptokens")
}

export function get_symbol( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_symbol();
}

export function get_contract( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_contract();
}
