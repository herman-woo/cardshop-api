"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { ENV } = process.env;
const database_variable = () => {
    if (ENV === 'dev') {
        console.log("Run Dev db");
        return new pg_1.Pool({
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD
        });
    }
    else {
        console.log("Run Test By default");
        return new pg_1.Pool({
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_TEST_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD
        });
    }
};
const Client = database_variable();
exports.default = Client;
