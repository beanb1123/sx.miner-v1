import { Api, JsonRpc } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
const { TextEncoder, TextDecoder } = require('util');
require("dotenv").config();

const signatureProvider = new JsSignatureProvider(process.env.PRIVATE_KEYS.split(","));
export const rpc = new JsonRpc("http://eos.eosn.io", { fetch: require('node-fetch') });
export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

export const ACCOUNT = process.env.ACCOUNT;
