"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrdersStore {
    constructor() {
        this.target = "orders";
        this.create = async (id) => {
            try {
                const sql = 'INSERT INTO orders (user_id,order_status) VALUES ($1,$2)';
                const connection = await database_1.default.connect();
                const orders = await connection.query(sql, [id, 'active']);
                connection.release();
                return orders.rows;
            }
            catch (error) {
                console.log("could not create new order");
            }
        };
        this.read = async (id) => {
            try {
                const sql = 'SELECT * FROM orders WHERE user_id=$1';
                const connection = await database_1.default.connect();
                const orders = await connection.query(sql, [id]);
                connection.release();
                return orders.rows;
            }
            catch (error) {
                console.log("could not find any orders for user");
            }
        };
        this.update = async (update) => {
            try {
                const order = update.id;
                const user = update.userId;
                const status = update.status;
                const sql = 'UPDATE orders SET order_status=$1 WHERE id=$2 AND user_id=$3';
                const connection = await database_1.default.connect();
                const orders = await connection.query(sql, [status, order, user]);
                connection.release();
                return orders.rows;
            }
            catch (error) {
                console.log("could not update order", error);
            }
        };
    }
}
exports.OrdersStore = OrdersStore;
