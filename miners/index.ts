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
        "BNT-EOS": require("./eos.gl/bancor/BNT-EOS"),
        "EOS-BNT": require("./eos.gl/bancor/EOS-BNT"),
        "BNT-EOSDT": require("./eos.gl/bancor/BNT-EOSDT"),
        "EOSDT-BNT": require("./eos.gl/bancor/EOSDT-BNT"),
        "BNT-USDT": require("./eos.gl/bancor/BNT-USDT"),
        "USDT-BNT": require("./eos.gl/bancor/USDT-BNT")
    },
    "newdex": {
        "EOS-EOSDT": require("./eos.gl/newdex/EOS-EOSDT"),
        "EOS-FAST": require("./eos.gl/newdex/EOS-FAST"),
        "EOSDT-EOS": require("./eos.gl/newdex/EOSDT-EOS"),
        "FAST-EOS": require("./eos.gl/newdex/FAST-EOS"),
    },
    "stable.sx": {
        "EOSDT-USDT": require("./eos.gl/stable.sx/EOSDT-USDT"),
        "USDT-EOSDT": require("./eos.gl/stable.sx/USDT-EOSDT")
    },
    "yolo": {
        "BNT-EOS": require("./eos.gl/yolo/BNT-EOS"),
        "EOS-BNT": require("./eos.gl/yolo/EOS-BNT"),
        "EOS-EOSDT": require("./eos.gl/yolo/EOS-EOSDT"),
        "EOSDT-EOS": require("./eos.gl/yolo/EOSDT-EOS"),
    }
}
