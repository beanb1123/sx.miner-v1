module.exports = {
    apps: [
    {
        name: "sx.stable",
        script: "index.ts",
        autorestart: true,
        log_date_format : "YYYY-MM-DD HH:mm",
        env: {
            MINER: "stable.sx",
            ACCOUNT: "miner.sx"
        }
    },
    {
        name: "sx.swap",
        script: "index.ts",
        autorestart: true,
        log_date_format : "YYYY-MM-DD HH:mm",
        env: {
            MINER: "swap.sx",
            ACCOUNT: "miner.sx"
        }
    },
    {
        name: "sx.vigor",
        script: "index.ts",
        autorestart: true,
        log_date_format : "YYYY-MM-DD HH:mm",
        env: {
            MINER: "vigor.sx",
            ACCOUNT: "miner.sx"
        }
    },
    {
        name: "sx.eosdt",
        script: "index.ts",
        autorestart: true,
        log_date_format : "YYYY-MM-DD HH:mm",
        env: {
            MINER: "eosdt.sx",
            ACCOUNT: "miner.sx"
        }
    }]
};