import { JsonRpc } from "eosjs";
import { get_datapoints } from "../delphioracle";

export async function get_price( rpc: JsonRpc ) {
    const datapoints = await get_datapoints( rpc, "eosusd" );
    return datapoints[0].median * 100;
}

// eosusd
// delphioracle