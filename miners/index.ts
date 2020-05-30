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
        "newdex": {
            "EOS-DAPP": require("./swap.sx/newdex/EOS-DAPP"),
            "DAPP-EOS": require("./swap.sx/newdex/DAPP-EOS")
        },
        "cross.newdex": {
            "EOS-USDT": require("./swap.sx/cross.newdex/EOS-USDT"),
            "USDT-EOS": require("./swap.sx/cross.newdex/USDT-EOS")
        },
        "eos.gl": {
            "EOS-BNT": require("./swap.sx/eos.gl/EOS-BNT"),
            "BNT-EOS": require("./swap.sx/eos.gl/BNT-EOS")
        },
        "bancor.v1": {
            "BNT-EOS": require("./swap.sx/bancor.v1/BNT-EOS"),
            "EOS-BNT": require("./swap.sx/bancor.v1/EOS-BNT"),
            "BNT-USDT": require("./swap.sx/bancor.v1/BNT-USDT"),
            "USDT-BNT": require("./swap.sx/bancor.v1/USDT-BNT"),
            "BNT-DAPP": require("./swap.sx/bancor.v1/BNT-DAPP"),
            "DAPP-BNT": require("./swap.sx/bancor.v1/DAPP-BNT"),
        },
        "bancor.v2": {
            "BNT-EOS": require("./swap.sx/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./swap.sx/bancor.v2/EOS-BNT"),
        },
        "stable.sx-bancor.v1": {
            "BNT-USDT-EOSDT": require("./swap.sx/stable.sx/bancor.v1/BNT-USDT-EOSDT"),
        },
        "stable.sx-bancor.v2": {
            "BNT-USDT-USDB": require("./swap.sx/stable.sx/bancor.v2/BNT-USDT-USDB"),
        },
        "stable.sx-swap.newdex": {
            "EOS-USDT-EOSDT": require("./swap.sx/stable.sx/swap.newdex/EOS-USDT-EOSDT"),
            "EOS-USDT-USN": require("./swap.sx/stable.sx/swap.newdex/EOS-USDT-USN"),
        },
        "stable.sx-pizzadex": {
            "EOS-USDT-USDE": require("./swap.sx/stable.sx/pizzadex/EOS-USDT-USDE"),
        },
        "stable.sx-pizzaswap": {
            "EOS-USDT-USDE": require("./swap.sx/stable.sx/pizzaswap/EOS-USDT-USDE"),
        },
        "stable.sx-eos.gl": {
            "EOS-USDT-EOSDT": require("./swap.sx/stable.sx/eos.gl/EOS-USDT-EOSDT"),
        },
        "swap.newdex-stable.sx": {
            "USDT-EOS-EOSDT": require("./swap.sx/swap.newdex/stable.sx/USDT-EOS-EOSDT"),
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
        "stable.sx-bancor.v1": {
            "BNT-EOSDT-USDT": require("./eos.gl/stable.sx/bancor.v1/BNT-EOSDT-USDT"),
        },
        "stable.sx-bancor.v2": {
            "BNT-EOSDT-USDB": require("./eos.gl/stable.sx/bancor.v2/BNT-EOSDT-USDB"),
        },
        "stable.sx-swap.newdex": {
            "EOS-EOSDT-USN": require("./eos.gl/stable.sx/swap.newdex/EOS-EOSDT-USN"),
        },
        "stable.sx-pizzadex": {
            "EOS-EOSDT-USDE": require("./eos.gl/stable.sx/pizzadex/EOS-EOSDT-USDE"),
        },
        "stable.sx-pizzaswap": {
            "EOS-EOSDT-USDE": require("./eos.gl/stable.sx/pizzaswap/EOS-EOSDT-USDE"),
        },
        "yolo": {
            "EOS-EOSDT": require("./eos.gl/yolo/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/yolo/EOSDT-EOS"),
        }
    }
}
