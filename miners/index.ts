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
        },
        "bancor.v2": {
            "BNT-EOS": require("./eos.gl/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v2/EOS-BNT"),
        },
        "eosdt.sx": {
            "EOS-EOSDT": require("./eos.gl/eosdt.sx/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/eosdt.sx/EOSDT-EOS"),
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
    },
    "eosdt.sx": {
        "eos.gl": {
            "EOS-EOSDT": require("./eosdt.sx/eos.gl/EOS-EOSDT"),
            "EOSDT-EOS": require("./eosdt.sx/eos.gl/EOSDT-EOS")
        },
        "newdex": {
            "EOSDT-EOS": require("./eosdt.sx/newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./eosdt.sx/newdex/EOS-EOSDT"),
        },
        "stable.sx": {
            "EOS-EOSDT": require("./eosdt.sx/stable.sx/EOS-EOSDT"),
            "EOS-USDT": require("./eosdt.sx/stable.sx/EOS-USDT"),
            "EOSDT-EOS": require("./eosdt.sx/stable.sx/EOSDT-EOS"),
            "EOSDT-USDT": require("./eosdt.sx/stable.sx/EOSDT-USDT"),
            "USDT-EOS": require("./eosdt.sx/stable.sx/USDT-EOS"),
            "USDT-EOSDT": require("./eosdt.sx/stable.sx/USDT-EOSDT"),
        },
        "swap.newdex": {
            "EOSDT-EOS": require("./eosdt.sx/swap.newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./eosdt.sx/swap.newdex/EOS-EOSDT"),
        },
        "swap.sx": {
            "EOS-EOSDT": require("./eosdt.sx/swap.sx/EOS-EOSDT"),
            "EOS-USDT": require("./eosdt.sx/swap.sx/EOS-USDT"),
            "EOSDT-EOS": require("./eosdt.sx/swap.sx/EOSDT-EOS"),
            "EOSDT-USDT": require("./eosdt.sx/swap.sx/EOSDT-USDT"),
            "USDT-EOS": require("./eosdt.sx/swap.sx/USDT-EOS"),
            "USDT-EOSDT": require("./eosdt.sx/swap.sx/USDT-EOSDT"),
        },
        "yolo": {
            "EOS-EOSDT": require("./eosdt.sx/yolo/EOS-EOSDT"),
            "EOSDT-EOS": require("./eosdt.sx/yolo/EOSDT-EOS"),
        },
    },
    "stable.sx": {
        "bancor.v2": {
            "USDB-EOS": require("./stable.sx/bancor.v2/USDB-EOS"),
            "EOS-USDB": require("./stable.sx/bancor.v2/EOS-USDB"),
        },
        "eos.gl": {
            "EOSDT-EOS": require("./stable.sx/eos.gl/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/eos.gl/EOS-EOSDT"),
        },
        "eosdt.sx": {
            "EOSDT-EOS": require("./stable.sx/eosdt.sx/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/eosdt.sx/EOS-EOSDT"),
            "USDT-EOS": require("./stable.sx/eosdt.sx/USDT-EOS"),
            "EOS-USDT": require("./stable.sx/eosdt.sx/EOS-USDT"),
            "USDT-EOSDT": require("./stable.sx/eosdt.sx/USDT-EOSDT"),
            "EOSDT-USDT": require("./stable.sx/eosdt.sx/EOSDT-USDT"),
        },
        "newdex": {
            "EOSDT-EOS": require("./stable.sx/newdex/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/newdex/EOS-EOSDT"),
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
        "yolo": {
            "EOSDT-EOS": require("./stable.sx/yolo/EOSDT-EOS"),
            "EOS-EOSDT": require("./stable.sx/yolo/EOS-EOSDT"),
        },
    },
    "swap.sx": {
        "bancor.v1": {
            "BNT-EOS": require("./swap.sx/bancor.v1/BNT-EOS"),
            "BNT-DICE": require("./swap.sx/bancor.v1/BNT-DICE"),
            "EOS-BNT": require("./swap.sx/bancor.v1/EOS-BNT"),
            "BNT-USDT": require("./swap.sx/bancor.v1/BNT-USDT"),
            "DAPP-BNT": require("./swap.sx/bancor.v1/DAPP-BNT"),
            "DICE-BNT": require("./swap.sx/bancor.v1/DICE-BNT"),
            "USDT-BNT": require("./swap.sx/bancor.v1/USDT-BNT"),
            "BNT-EOSDT": require("./swap.sx/bancor.v1/BNT-EOSDT"),
            "EOSDT-BNT": require("./swap.sx/bancor.v1/EOSDT-BNT"),
            "BNT-DAPP": require("./swap.sx/bancor.v1/BNT-DAPP"),
        },
        "bancor.v2": {
            "BNT-EOS": require("./swap.sx/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./swap.sx/bancor.v2/EOS-BNT"),
            "BOID-BNT": require("./swap.sx/bancor.v2/BOID-BNT"),
            "BNT-BOID": require("./swap.sx/bancor.v2/BNT-BOID"),
        },
        "eos.gl": {
            "EOS-BNT": require("./swap.sx/eos.gl/EOS-BNT"),
            "BNT-EOS": require("./swap.sx/eos.gl/BNT-EOS"),
            "EOSDT-EOS": require("./swap.sx/eos.gl/EOSDT-EOS"),
            "EOS-EOSDT": require("./swap.sx/eos.gl/EOS-EOSDT"),
        },
        "newdex": {
            "BOID-EOS": require("./swap.sx/newdex/BOID-EOS"),
            "DAPP-EOS": require("./swap.sx/newdex/DAPP-EOS"),
            "DICE-EOS": require("./swap.sx/newdex/DICE-EOS"),
            "EOS-DAPP": require("./swap.sx/newdex/EOS-DAPP"),
            "EOS-BOID": require("./swap.sx/newdex/EOS-BOID"),
            "EOS-DICE": require("./swap.sx/newdex/EOS-DICE"),
            "EOS-EOSDT": require("./swap.sx/newdex/EOS-EOSDT"),
            "EOSDT-EOS": require("./swap.sx/newdex/EOSDT-EOS"),
        },
        // "pizzaswap": {
        //     "DAPP-EOS": require("./swap.sx/pizzadex/DAPP-EOS"),
        //     "EOS-DAPP": require("./swap.sx/pizzadex/EOS-DAPP"),
        // },
        "swap.newdex": {
            "EOS-EOSDT": require("./swap.sx/swap.newdex/EOS-EOSDT"),
            "EOSDT-EOS": require("./swap.sx/swap.newdex/EOSDT-EOS"),
            "EOS-DICE": require("./swap.sx/swap.newdex/EOS-DICE"),
            "DICE-EOS": require("./swap.sx/swap.newdex/DICE-EOS"),
        },
    },
}
