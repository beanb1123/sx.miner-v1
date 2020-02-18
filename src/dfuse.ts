import * as dotenv from "dotenv"
import { createDfuseClient, FileApiTokenStore } from "@dfuse/client";
dotenv.config();

const fetch = require('node-fetch');
;(global as any).fetch = fetch;
;(global as any).WebSocket = require("ws");

dotenv.config();

if (!process.env.DFUSE_TOKEN) throw new Error("[DFUSE_TOKEN] is required");
if (process.env.DFUSE_TOKEN.includes("PRIVATE")) throw new Error("[DFUSE_TOKEN] invalid token")

export const apiKey = process.env.DFUSE_TOKEN || '';

export const client = createDfuseClient({
    apiKey: process.env.DFUSE_TOKEN,
    apiTokenStore: new FileApiTokenStore("dfuse-token.json"),
    network: "mainnet"
})