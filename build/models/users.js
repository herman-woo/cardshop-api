"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
class UserStore {
    constructor() {
        this.target = "users";
        this.index = async () => {
            try {
                const sql = `SELECT * FROM ${this.target}`;
                const connection = await database_1.default.connect();
                const result = await connection.query(sql);
                return result.rows;
            }
            catch (err) {
                console.log(err);
            }
        };
        this.show = async (id) => {
            try {
                const db = await database_1.default.connect();
                const result = await db.query(`SELECT * FROM ${this.target} WHERE id=${id}`);
                db.release();
                return result.rows[0];
            }
            catch (err) {
                console.log(err);
            }
        };
        this.create = async (user) => {
            try {
                const pw = user.password;
                const hash = bcrypt_1.default.hashSync(pw + pepper, parseInt(saltRounds));
                const sql = 'INSERT INTO users (first,last,password) VALUES ($1,$2,$3) RETURNING *';
                const db = await database_1.default.connect();
                const newEntry = await db.query(sql, [user.first, user.last, hash]);
                db.release();
                return newEntry.rows[0];
            }
            catch (err) {
                console.log(err);
            }
        };
        this.authenticate = async (login) => {
            const conn = await database_1.default.connect();
            const sql = 'SELECT password FROM users WHERE first=$1 AND last=$2';
            const result = await conn.query(sql, [login.first, login.last]);
            const password = login.password;
            console.log(result.rows);
            if (result.rows.length) {
                const user = result.rows[0];
                if (bcrypt_1.default.compareSync(password + pepper, user.password)) {
                    console.log("Login Successful");
                    return user;
                }
                else {
                    console.log("Incorrect Password");
                }
            }
            else {
                console.log("No user Found");
            }
        };
    }
}
exports.default = UserStore;
