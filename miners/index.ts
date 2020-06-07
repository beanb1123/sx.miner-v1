// import * as StableEOSDTUSDT from
// import * as StableUSDTEOSDT from "./eos.gl/stable.sx/USDT-EOSDT"

import { Name } from "eos-common";

interface Miners {
    [miner: string]: {
        [exchange: string] : {
            [pair: string]: {
                mine: (miner: Name) => Promise<string>
            }
        }
    }
}

export const miners: Miners = {
    "swap.sx": {
        "bancor.v1": {
            "BNT-EOS": require("./swap.sx/bancor.v1/BNT-EOS"),
            "EOS-BNT": require("./swap.sx/bancor.v1/EOS-BNT"),
            "BNT-USDT": require("./swap.sx/bancor.v1/BNT-USDT"),
            "USDT-BNT": require("./swap.sx/bancor.v1/USDT-BNT"),
            "BNT-EOSDT": require("./swap.sx/bancor.v1/BNT-EOSDT"),
            "EOSDT-BNT": require("./swap.sx/bancor.v1/EOSDT-BNT"),
            "BNT-DAPP": require("./swap.sx/bancor.v1/BNT-DAPP"),
            "DAPP-BNT": require("./swap.sx/bancor.v1/DAPP-BNT"),
        },
        "bancor.v2": {
            "BNT-EOS": require("./swap.sx/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./swap.sx/bancor.v2/EOS-BNT"),
        },
        "eos.gl": {
            "EOS-BNT": require("./swap.sx/eos.gl/EOS-BNT"),
            "BNT-EOS": require("./swap.sx/eos.gl/BNT-EOS"),
            "EOSDT-EOS": require("./swap.sx/eos.gl/EOSDT-EOS"),
            "EOS-EOSDT": require("./swap.sx/eos.gl/EOS-EOSDT"),
        },
        "newdex": {
            "EOS-DAPP": require("./swap.sx/newdex/EOS-DAPP"),
            "DAPP-EOS": require("./swap.sx/newdex/DAPP-EOS"),
            "EOSDT-EOS": require("./swap.sx/newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./swap.sx/newdex/EOS-EOSDT"),
        },
    },
    "eos.gl": {
        "bancor.v1": {
            "BNT-EOS": require("./eos.gl/bancor.v1/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v1/EOS-BNT"),
            "BNT-EOSDT": require("./eos.gl/bancor.v1/BNT-EOSDT"),
            "EOSDT-BNT": require("./eos.gl/bancor.v1/EOSDT-BNT"),
        },
        "bancor.v2": {
            "BNT-EOS": require("./eos.gl/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v2/EOS-BNT"),
        },
        "newdex": {
            "EOS-EOSDT": require("./eos.gl/newdex/EOS-EOSDT"),
            "EOS-FAST": require("./eos.gl/newdex/EOS-FAST"),
            "EOSDT-EOS": require("./eos.gl/newdex/EOSDT-EOS"),
            "FAST-EOS": require("./eos.gl/newdex/FAST-EOS"),
        },
        "swap.newdex": {
            "EOS-EOSDT": require("./eos.gl/swap.newdex/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/swap.newdex/EOSDT-EOS"),
        },
        "yolo": {
            "EOS-EOSDT": require("./eos.gl/yolo/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/yolo/EOSDT-EOS"),
        }
    }
}
