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
    "eos.gl": {
        "bancor.v1": {
            "BNT-EOS": require("./eos.gl/bancor.v1/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v1/EOS-BNT"),
            "BNT-EOSDT": require("./eos.gl/bancor.v1/BNT-EOSDT"),
            "EOSDT-BNT": require("./eos.gl/bancor.v1/EOSDT-BNT"),
            "BNT-USDT": require("./eos.gl/bancor.v1/BNT-USDT"),
            "USDT-BNT": require("./eos.gl/bancor.v1/USDT-BNT"),
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
        "swap.sx": {
            "EOSDT-EOS": require("./eos.gl/swap.sx/EOSDT-EOS"),
            "EOS-EOSDT": require("./eos.gl/swap.sx/EOS-EOSDT"),
        },
        "swap.newdex": {
            "EOS-EOSDT": require("./eos.gl/swap.newdex/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/swap.newdex/EOSDT-EOS"),
        },
        "yolo": {
            "EOS-EOSDT": require("./eos.gl/yolo/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/yolo/EOSDT-EOS"),
        }
    },
    "stable.sx": {
        "bancor.v2": {
            "USDB-EOS": require("./stable.sx/bancor.v2/USDB-EOS"),
            "EOS-USDB": require("./stable.sx/bancor.v2/EOS-USDB"),
        },
        "cross.sx": {
            "EOS-USDT": require("./stable.sx/cross.sx/EOS-USDT"),
            "USDT-EOS": require("./stable.sx/cross.sx/USDT-EOS")
        },
        "eos.gl": {
            "EOSDT-EOS": require("./stable.sx/eos.gl/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/eos.gl/EOS-EOSDT"),
        },
        "newdex": {
            "EOSDT-EOS": require("./stable.sx/newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/newdex/EOS-EOSDT"),
            "VIGOR-EOS": require("./stable.sx/newdex/VIGOR-EOS"),
            "EOS-VIGOR": require("./stable.sx/newdex/EOS-VIGOR"),
        },
        "pizzadex": {
            "USDE-EOS": require("./stable.sx/pizzadex/USDE-EOS"),
            "EOS-USDE": require("./stable.sx/pizzadex/EOS-USDE"),
            "USDE-USDT": require("./stable.sx/pizzadex/USDE-USDT"),
            "USDT-USDE": require("./stable.sx/pizzadex/USDT-USDE"),
        },
        "pizzaswap": {
            "USDE-EOS": require("./stable.sx/pizzadex/USDE-EOS"),
            "EOS-USDE": require("./stable.sx/pizzadex/EOS-USDE"),
        },
        "swap.newdex": {
            "EOSDT-EOS": require("./stable.sx/swap.newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/swap.newdex/EOS-EOSDT"),
        },
        "swap.sx": {
            "USDT-EOS": require("./stable.sx/swap.sx/USDT-EOS"),
            "EOS-USDT": require("./stable.sx/swap.sx/EOS-USDT"),
            "EOSDT-EOS": require("./stable.sx/swap.sx/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/swap.sx/EOS-EOSDT"),
        },
        "yolo": {
            "EOSDT-EOS": require("./stable.sx/yolo/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/yolo/EOS-EOSDT"),
        },
    },
    "swap.sx": {
        "cross.sx": {
            "EOS-USDT": require("./swap.sx/cross.sx/EOS-USDT"),
            "USDT-EOS": require("./swap.sx/cross.sx/USDT-EOS")
        },
        "newdex": {
            "EOS-EOSDT": require("./swap.sx/newdex/EOS-EOSDT"),
            "EOSDT-EOS": require("./swap.sx/newdex/EOSDT-EOS"),
        },
        "stable.sx": {
            "EOS-USDT": require("./swap.sx/stable.sx/EOS-USDT"),
            "USDT-EOS": require("./swap.sx/stable.sx/USDT-EOS"),
            "EOS-EOSDT": require("./swap.sx/stable.sx/EOS-EOSDT"),
            "EOSDT-EOS": require("./swap.sx/stable.sx/EOSDT-EOS"),
        },
    },
    "vigor.sx": {
        "stable.sx": {
            "VIGOR-USDT": require("./vigor.sx/stable.sx/VIGOR-USDT"),
            "USDT-VIGOR": require("./vigor.sx/stable.sx/USDT-VIGOR"),
        },
    },
    "eosdt.sx": {
        "stable.sx": {
            "EOSDT-USDT": require("./eosdt.sx/stable.sx/EOSDT-USDT"),
            "USDT-EOSDT": require("./eosdt.sx/stable.sx/USDT-EOSDT"),
        },
    },
}
