import { miners } from './miners'
import { ACCOUNT } from "./src/config"
import { timeout } from "./src/utils"
import { CronJob } from "cron"

new CronJob('*/1 * * * *', async () => {
    for ( const exchange of Object.keys( miners )) {
        for ( const pair of Object.keys( miners[ exchange ]) ) {
            while ( true ) {
                try {
                    const trx_id = await miners[exchange][pair].mine(ACCOUNT);
                    if ( !trx_id ) break;
                    await timeout(5);
                } catch (e) {
                    break;
                }
            }
            await timeout(0.2);
        }
    }
}, null, true).fireOnTick();
