// import * as StableEOSDTUSDT from
// import * as StableUSDTEOSDT from "./eos.gl/stable.sx/USDT-EOSDT"

import { Name } from "eos-common";

interface Miners {
    [exchange: string] : {
        [pair: string]: {
            mine: (miner: Name) => Promise<string>
        }
    }
}

export const miners: Miners = {
    "bancor": {
        "BNTEOS": require("./eos.gl/bancor/BNT-EOS"),
        "EOSBNT": require("./eos.gl/bancor/EOS-BNT")
    },
    "newdex": {
        "EOSEOSDT": require("./eos.gl/newdex/EOS-EOSDT"),
        "EOSFAST": require("./eos.gl/newdex/EOS-FAST"),
        "EOSDTEOS": require("./eos.gl/newdex/EOSDT-EOS"),
        "FASTEOS": require("./eos.gl/newdex/FAST-EOS"),
    },
    "stable.sx": {
        "EOSDTUSDT": require("./eos.gl/stable.sx/EOSDT-USDT"),
        "USDTEOSDT": require("./eos.gl/stable.sx/USDT-EOSDT")
    }
}
