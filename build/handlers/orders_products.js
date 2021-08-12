"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_products_1 = require("../models/orders-products");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.TOKEN_SECRET;
const store = new orders_products_1.OrdersProductsStore();
const addToCart = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const order = req.body.orderID;
    const product = req.body.productID;
    const qty = req.body.quantity;
    const add = await store.create(order, product, qty);
    res.json(add);
};
const removeFromCart = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const item = req.body.cartItem;
    const cart = await store.delete(item);
    res.json(cart);
};
const getCart = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const order = req.body.orderID;
    const cart = await store.read(order);
    res.json(cart);
};
const orderProductRoutes = (app) => {
    app.post('/users/:id/orders/cart/add', addToCart);
    app.delete('/users/:id/orders/cart/remove', removeFromCart);
    app.post('/users/:id/orders/cart', getCart);
};
exports.default = orderProductRoutes;
