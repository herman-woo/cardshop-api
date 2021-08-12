"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersProductsStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrdersProductsStore {
    constructor() {
        this.create = async (order, product, qty) => {
            try {
                const sql = 'INSERT INTO orders_products (order_id,product_id,order_quantity) VALUES ($1,$2,$3) RETURNING *';
                const connection = await database_1.default.connect();
                const orderProd = await connection.query(sql, [order, product, qty]);
                connection.release();
                return orderProd.rows;
            }
            catch (error) {
                console.log(error);
            }
        };
        this.read = async (order) => {
            try {
                const sql = 'SELECT * FROM orders_products WHERE order_id=$1';
                const connection = await database_1.default.connect();
                const cart = await connection.query(sql, [order]);
                connection.release();
                return cart.rows;
            }
            catch (error) {
                console.log(error);
            }
        };
        this.delete = async (item) => {
            try {
                const sql = 'DELETE FROM orders_products WHERE id=$1';
                const connection = await database_1.default.connect();
                const cart = await connection.query(sql, [item]);
                connection.release();
                return cart.rows;
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.OrdersProductsStore = OrdersProductsStore;
