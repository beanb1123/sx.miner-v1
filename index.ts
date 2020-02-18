import { MINER, QUANTITY, PROFIT, INTERVAL_SECONDS } from "./src/config";
import { autoconvert } from "./src/actions";
import { timeout, transact } from "./src/utils";

async function main() {
  const tx_id = await transact([ autoconvert( MINER.actor, QUANTITY, PROFIT ) ])
  if (!tx_id) await timeout( INTERVAL_SECONDS );
  main();
}
main()