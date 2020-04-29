import { rpc } from "./config"
import { get_reserves } from "../plugins/bancor"
import { asset, symbol_code, Asset } from "eos-common";


(async () => {
    console.log( await get_reserves( rpc, "EOSBNT") );
})();
