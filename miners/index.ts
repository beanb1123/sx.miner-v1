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
        // "eosdt.sx": {
        //     "EOS-EOSDT": require("./eos.gl/eosdt.sx/EOS-EOSDT"),
        //     "EOSDT-EOS": require("./eos.gl/eosdt.sx/EOSDT-EOS"),
        // },
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
    // "eosdt.sx": {
    //     "eos.gl": {
    //         "EOS-EOSDT": require("./eosdt.sx/eos.gl/EOS-EOSDT"),
    //         "EOSDT-EOS": require("./eosdt.sx/eos.gl/EOSDT-EOS")
    //     },
    //     "cross.sx": {
    //         "EOS-USDT": require("./eosdt.sx/cross.sx/EOS-USDT"),
    //         "USDT-EOS": require("./eosdt.sx/cross.sx/USDT-EOS")
    //     },
    //     "newdex": {
    //         "EOSDT-EOS": require("./eosdt.sx/newdex/EOSDT-EOS"),
    //         "EOS-EOSDT": require("./eosdt.sx/newdex/EOS-EOSDT"),
    //     },
    //     "stable.sx": {
    //         "EOS-EOSDT": require("./eosdt.sx/stable.sx/EOS-EOSDT"),
    //         "EOS-USDT": require("./eosdt.sx/stable.sx/EOS-USDT"),
    //         "EOSDT-EOS": require("./eosdt.sx/stable.sx/EOSDT-EOS"),
    //         "EOSDT-USDT": require("./eosdt.sx/stable.sx/EOSDT-USDT"),
    //         "USDT-EOS": require("./eosdt.sx/stable.sx/USDT-EOS"),
    //         "USDT-EOSDT": require("./eosdt.sx/stable.sx/USDT-EOSDT"),
    //     },
    //     "swap.newdex": {
    //         "EOSDT-EOS": require("./eosdt.sx/swap.newdex/EOSDT-EOS"),
    //         "EOS-EOSDT": require("./eosdt.sx/swap.newdex/EOS-EOSDT"),
    //     },
    //     "swap.sx": {
    //         "EOS-USDT": require("./eosdt.sx/swap.sx/EOS-USDT"),
    //         "USDT-EOS": require("./eosdt.sx/swap.sx/USDT-EOS"),
    //     },
    //     "yolo": {
    //         "EOS-EOSDT": require("./eosdt.sx/yolo/EOS-EOSDT"),
    //         "EOSDT-EOS": require("./eosdt.sx/yolo/EOSDT-EOS"),
    //     },
    // },
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
        // "eosdt.sx": {
        //     "EOSDT-EOS": require("./stable.sx/eosdt.sx/EOSDT-EOS"),
        //     "EOS-EOSDT": require("./stable.sx/eosdt.sx/EOS-EOSDT"),
        //     "USDT-EOS": require("./stable.sx/eosdt.sx/USDT-EOS"),
        //     "EOS-USDT": require("./stable.sx/eosdt.sx/EOS-USDT"),
        //     "USDT-EOSDT": require("./stable.sx/eosdt.sx/USDT-EOSDT"),
        //     "EOSDT-USDT": require("./stable.sx/eosdt.sx/EOSDT-USDT"),
        // },
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
        "swap.sx": {
            "USDT-EOS": require("./stable.sx/swap.sx/USDT-EOS"),
            "EOS-USDT": require("./stable.sx/swap.sx/EOS-USDT"),
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
        // "eosdt.sx": {
        //     "EOS-USDT": require("./swap.sx/eosdt.sx/EOS-USDT"),
        //     "USDT-EOS": require("./swap.sx/eosdt.sx/USDT-EOS"),
        // },
        // "usde.sx": {
        //     "EOS-USDT": require("./swap.sx/usde.sx/EOS-USDT"),
        //     "USDT-EOS": require("./swap.sx/usde.sx/USDT-EOS"),
        // },
        "stable.sx": {
            "EOS-USDT": require("./swap.sx/stable.sx/EOS-USDT"),
            "USDT-EOS": require("./swap.sx/stable.sx/USDT-EOS"),
        },
        // "vigor.sx": {
        //     "EOS-USDT": require("./swap.sx/vigor.sx/EOS-USDT"),
        //     "USDT-EOS": require("./swap.sx/vigor.sx/USDT-EOS"),
        // },
    },
    // "usde.sx": {
    //     "cross.sx": {
    //         "EOS-USDT": require("./usde.sx/cross.sx/EOS-USDT"),
    //         "USDT-EOS": require("./usde.sx/cross.sx/USDT-EOS")
    //     },
    //     "eosdt.sx": {
    //         "EOS-USDT": require("./usde.sx/eosdt.sx/EOS-USDT"),
    //         "USDT-EOS": require("./usde.sx/eosdt.sx/USDT-EOS"),
    //     },
    //     "stable.sx": {
    //         "EOS-USDT": require("./usde.sx/stable.sx/EOS-USDT"),
    //         "EOS-USDE": require("./usde.sx/stable.sx/EOS-USDE"),
    //         "USDT-EOS": require("./usde.sx/stable.sx/USDT-EOS"),
    //         "USDT-USDE": require("./usde.sx/stable.sx/USDT-USDE"),
    //         "USDE-EOS": require("./usde.sx/stable.sx/USDE-EOS"),
    //         "USDE-USDT": require("./usde.sx/stable.sx/USDE-USDT"),
    //     },
    //     "swap.sx": {
    //         "EOS-USDT": require("./usde.sx/swap.sx/EOS-USDT"),
    //         "USDT-EOS": require("./usde.sx/swap.sx/USDT-EOS"),
    //     },
    // },
    // "vigor.sx": {
    //     "cross.sx": {
    //         "EOS-USDT": require("./vigor.sx/cross.sx/EOS-USDT"),
    //         "USDT-EOS": require("./vigor.sx/cross.sx/USDT-EOS")
    //     },
    //     "eosdt.sx": {
    //         "EOS-USDT": require("./vigor.sx/eosdt.sx/EOS-USDT"),
    //         "USDT-EOS": require("./vigor.sx/eosdt.sx/USDT-EOS"),
    //     },
    //     "newdex": {
    //         "VIGOR-EOS": require("./vigor.sx/newdex/VIGOR-EOS"),
    //         "EOS-VIGOR": require("./vigor.sx/newdex/EOS-VIGOR"),
    //     },
    //     "stable.sx": {
    //         "EOS-USDT": require("./vigor.sx/stable.sx/EOS-USDT"),
    //         "EOS-VIGOR": require("./vigor.sx/stable.sx/EOS-VIGOR"),
    //         "USDT-EOS": require("./vigor.sx/stable.sx/USDT-EOS"),
    //         "USDT-VIGOR": require("./vigor.sx/stable.sx/USDT-VIGOR"),
    //         "VIGOR-EOS": require("./vigor.sx/stable.sx/VIGOR-EOS"),
    //         "VIGOR-USDT": require("./vigor.sx/stable.sx/VIGOR-USDT"),
    //     },
    //     "swap.sx": {
    //         "EOS-USDT": require("./vigor.sx/swap.sx/EOS-USDT"),
    //         "USDT-EOS": require("./vigor.sx/swap.sx/USDT-EOS"),
    //     }
    // },
}
