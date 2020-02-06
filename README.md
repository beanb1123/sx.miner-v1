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
# dfuse
DFUSE_TOKEN="<PRIVATE server_xxx>"
NODEOS_ENDPOINT="http://localhost:8888"

# sx.miner
MINER="myaccount@active"
CPU_PAYER="mycpu@active"
QUANTITY="1.00 USD"
PROFIT="0.01 USD"
PRIVATE_KEYS="<PRIVATE KEY>,<PRIVATE KEY>"
```

## Quickstart

```
$ npm start
```