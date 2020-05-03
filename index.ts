import { miners } from './miners'
import { ACCOUNT } from "./src/config"
import { timeout } from "./src/utils"
import { CronJob } from "cron"

new CronJob('*/2 * * * *', async () => {
    for ( const exchange of Object.keys( miners )) {
        for ( const pair of Object.keys( miners[ exchange ]) ) {
            while ( true ) {
                try {
                    const trx_id = await miners[exchange][pair].mine(ACCOUNT);
                    if ( !trx_id ) break;
                } catch (e) {
                    console.error(e)
                    timeout(5);
                }
            }
        }
    }
}, null, true).fireOnTick();

