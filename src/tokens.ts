
import { ExtendedSymbol, SymbolCode } from "eos-common";

export const tokens: { [symcode: string]: ExtendedSymbol } = {
    "FAST": new ExtendedSymbol("4,FAST", "fastecoadmin"),
    "EOS": new ExtendedSymbol("4,EOS", "eosio.token"),
    "GL": new ExtendedSymbol("4,GL", "token.gl"),
    "USDT": new ExtendedSymbol("4,USDT", "tethertether"),
    "EOSDT": new ExtendedSymbol("9,EOSDT", "eosdtsttoken"),
    "BNT": new ExtendedSymbol("10,BNT", "bntbntbntbnt"),
    "BOID": new ExtendedSymbol("4,BOID", "boidcomtoken"),
    "PBTC": new ExtendedSymbol("8,PBTC", "btc.ptokens"),
    "CHEX": new ExtendedSymbol("8,CHEX", "chexchexchex"),
    "USDB": new ExtendedSymbol("4,USDB", "usdbusdbusdb"),
    "SENSE": new ExtendedSymbol("4,SENSE", "sensegenesis"),
    "USN": new ExtendedSymbol("4,USN", "danchortoken"),
    "KEY": new ExtendedSymbol("4,KEY", "mkstaketoken"),
    "DICE": new ExtendedSymbol("4,DICE", "betdicetoken"),
    "TPT": new ExtendedSymbol("4,TPT", "eosiotptoken"),
    "BG": new ExtendedSymbol("4,BG", "bgbgbgbgbgbg"),
    "NDX": new ExtendedSymbol("4,NDX", "newdexissuer"),
    "USDE": new ExtendedSymbol("4,USDE", "usdetotokens"),
    "PIZZA": new ExtendedSymbol("4,PIZZA", "pizzatotoken"),
    "EIDOS": new ExtendedSymbol("4,EIDOS", "eidosonecoin"),
    "POOL": new ExtendedSymbol("4,POOL", "stpool.eos"),
    "YAS": new ExtendedSymbol("4,YAS", "yastokencode"),
    "DAPP": new ExtendedSymbol("4,DAPP", "dappservices"),
    "VIGOR": new ExtendedSymbol("4,VIGOR", "vigortoken11"),
}

export function get_symbol( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_symbol();
}

export function get_contract( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_contract().to_string();
}
