import { rpc } from "../src/config"
import { get_reserves, calculate_rate } from "../plugins/bancor"
import { asset, asset_to_number } from "eos-common";

(async () => {
    const EOSBNT = await get_reserves( rpc, "EOSBNT");
    const SENSBNT = await get_reserves( rpc, "SENSBNT");
    const BNTUSD = await get_reserves( rpc, "BNTUSD");

    for ( const [base, quote] of [ [EOSBNT["BNT"], EOSBNT["EOS"]], [SENSBNT["BNT"], SENSBNT["SENSE"]], [BNTUSD["BNT"], BNTUSD["USDB"]] ] ) {
        // user inputs
        const quantity = asset("1.0000 BNT");
        const symcode_out = quote.symbol.code();

        // calculations
        const { fee, out } = calculate_rate( quantity, symcode_out, base, quote );

        // logs
        if ( process.argv[2] == "debug") {
            console.log("--------------------");
            console.log("quantity:", quantity.to_string());
            console.log("symcode_out:", symcode_out.to_string());
            console.log("out:", out.to_string());
            console.log("fee:", fee.to_string());
        } else {
            console.log(`1 BNT @ ${out.to_string()} (${ 1 / asset_to_number(out) })`);
        }
    }
})();
