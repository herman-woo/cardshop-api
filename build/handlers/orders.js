"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.TOKEN_SECRET;
const store = new orders_1.OrdersStore();
const getOrders = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const userID = req.params.id;
    const orders = await store.read(userID);
    res.json(orders);
};
const newOrder = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const userID = req.params.id;
    const order = await store.create(userID);
    res.json(order);
};
const updateOrder = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const updateOrder = {
        id: req.body.orderID,
        userId: req.params.id,
        status: req.body.status
    };
    const order = await store.update(updateOrder);
    res.json(order);
};
const orderRoutes = (app) => {
    app.get('/users/:id/orders', getOrders);
    app.post('/users/:id/orders/create', newOrder);
    app.post('/users/:id/orders/update', updateOrder);
};
exports.default = orderRoutes;
