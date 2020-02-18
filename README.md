# SX - Miner

## Install

```
git clone https://github.com/stableex/sx.miner.git
cd sx.miner
npm install
```

## Configure

Create `.env` file

```bash
# sx.miner
CONTRACT="stablestable"
QUANTITY="1.00 USD"
PROFIT="0.01 USD"
INTERVAL_SECONDS=10

# eosjs
NODEOS_ENDPOINT="http://localhost:8888"
MINER="myaccount@active"
CPU_PAYER="mycpu@active"
PRIVATE_KEYS="<PRIVATE KEY>,<PRIVATE KEY>"

# dfuse (optional)
DFUSE_TOKEN="<PRIVATE server_xxx>"
```

## Quickstart

```
$ npm start
```