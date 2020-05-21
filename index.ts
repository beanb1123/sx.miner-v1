import { miners } from './miners'
import { ACCOUNT } from "./src/config"
import { timeout } from "./src/utils"
import { CronJob } from "cron"

new CronJob(process.env.CRON, async () => {
    for ( const miner of Object.keys( miners )) {
        if ( miner != process.env.MINER ) continue;

        for ( const exchange of Object.keys( miners[ miner ] )) {
            for ( const pair of Object.keys( miners[ miner ][ exchange ]) ) {
                while ( true ) {
                    try {
                        const trx_id = await miners[miner][exchange][pair].mine(ACCOUNT);
                        if ( !trx_id ) {
                            console.error(exchange, pair);
                            break;
                        }
                        await timeout(5);
                    } catch (e) {
                        break;
                    }
                }
                await timeout(0.2);
            }
        }
    }
}, null, true).fireOnTick();
