import { rpc } from "./config"
import { get_reserves, calculate_rate } from "../plugins/bancor"
import { asset } from "eos-common";


(async () => {
    const reserve = await get_reserves( rpc, "EOSBNT");
    const base = reserve["EOS"];
    const quote = reserve["BNT"];

    // user inputs
    const quantity = asset("1.0000 EOS");
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
        console.log("1 EOS @ " + out.to_string());
    }
})();
