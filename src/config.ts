import * as dotenv from "dotenv"
import { Api, JsonRpc } from 'eosjs';
import { string_to_permission } from "./utils";
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
const { TextEncoder, TextDecoder } = require('util');
dotenv.config();

export const NODEOS_ENDPOINT = process.env.NODEOS_ENDPOINT || "http://localhost:8888";
export const rpc = new JsonRpc(NODEOS_ENDPOINT, { fetch: require('node-fetch') });

if (!process.env.MINER) throw new Error("[MINER] is required");
if (!process.env.PRIVATE_KEYS) throw new Error("[PRIVATE_KEYS] is required");
if (process.env.PRIVATE_KEYS.includes("PRIVATE")) throw new Error("[PRIVATE_KEYS] invalid key")

export const signatureProvider = new JsSignatureProvider(process.env.PRIVATE_KEYS.split(","));
export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

export const INTERVAL_SECONDS = Number(process.env.INTERVAL_SECONDS || 10);
export const CONTRACT = process.env.CONTRACT || "stablestable";
export const MINER = string_to_permission(process.env.MINER);
export const CPU_PAYER = string_to_permission(process.env.CPU_PAYER);
export const QUANTITY = process.env.QUANTITY || "1.00 USD";
export const PROFIT = process.env.PROFIT || "0.01 USD";
export const AUTHORIZATION = (MINER.actor == CPU_PAYER.actor) ? [ MINER ] : [ CPU_PAYER, MINER ];

console.log("Configurations")
console.log("==============")
console.log("NODEOS_ENDPOINT:", NODEOS_ENDPOINT);
console.log("MINER:", MINER);
console.log("CPU_PAYER:", CPU_PAYER);
console.log("QUANTITY:", QUANTITY);
console.log("PROFIT:", PROFIT);
console.log("INTERVAL_SECONDS:", INTERVAL_SECONDS);
console.log("==============")