import { rpc } from "./config"
import { calculate_rate, calculate_mining_rewards } from "../plugins/eos.gl"
import { get_balance } from "../plugins/eosio.token"
import { asset, symbol_code, Asset } from "eos-common";


(async () => {
    const EOS = await get_balance(rpc, "eosio.token", "eos.gl", "EOS");
    const FAST = await get_balance(rpc, "fastecoadmin", "eos.gl", "FAST");
    const GL = await get_balance(rpc, "token.gl", "eos.gl", "GL");

    // user inputs
    const quantity = asset("1.0000 EOS");
    const symcode_out = symbol_code("FAST");

    // contract inputs
    const symcode_mining = symbol_code("GL");
    const trading_fee = 30;
    const mining_rewards = 11000;

    // must add incoming quantity to base
    // token transfer increases token balance of contract
    const base = Asset.plus( EOS, quantity );

    // calculations
    const { fee, out } = calculate_rate( quantity, symcode_out, base, FAST, trading_fee );
    const mining = calculate_mining_rewards( fee, symcode_mining, base, GL, mining_rewards );

    // logs
    console.log("out:", out.to_string());
    console.log("fee:", fee.to_string());
    console.log("mining:", mining.to_string());
})();
