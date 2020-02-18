import { MINER, QUANTITY, PROFIT, INTERVAL_SECONDS } from "./src/config";
import { autoconvert } from "./src/actions";
import { timeout, transact } from "./src/utils";

async function main() {
  await transact([ autoconvert( MINER.actor, QUANTITY, PROFIT ) ])
  await timeout( INTERVAL_SECONDS );
  main();
}
main()