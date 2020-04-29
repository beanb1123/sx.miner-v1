import { rpc } from "./config"
import { calculate_rate, calculate_mining_rewards, calculate_out, get_settings } from "../plugins/eos.gl"
import { get_balance } from "../plugins/eosio.token"
import { asset, symbol_code } from "eos-common";


(async () => {
    const EOS = await get_balance(rpc, "eosio.token", "eos.gl", "EOS");
    const FAST = await get_balance(rpc, "fastecoadmin", "eos.gl", "FAST");
    const GL = await get_balance(rpc, "token.gl", "eos.gl", "GL");

    // user inputs
    const quantity = asset("1.0000 EOS");
    const symcode_out = symbol_code("FAST");

    // contract inputs
    const symcode_mining = symbol_code("GL");
    const settings = await get_settings( rpc );

    // calculations
    const { fee, out } = calculate_rate( quantity, symcode_out, EOS, FAST, settings.fee );
    const mining = calculate_mining_rewards( fee, symcode_mining, EOS, GL, settings.mining_rewards );
    const burn = calculate_out( fee, symbol_code("FAST"), EOS, FAST );

    // logs
    console.log("quantity:", quantity.to_string());
    console.log("symcode_out:", symcode_out.to_string());
    console.log("out:", out.to_string());
    console.log("fee:", fee.to_string());
    console.log("mining:", mining.to_string());
    console.log("burn:", burn.to_string());
})();
