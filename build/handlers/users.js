"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = __importDefault(require("../models/users"));
const store = new users_1.default();
const secret = process.env.TOKEN_SECRET;
const index = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const data = await store.index();
    res.json(data);
};
const show = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const data = await store.show(req.params.id);
    res.json(data);
};
const create = async (req, res) => {
    const newUser = {
        id: 99,
        first: req.body.first,
        last: req.body.last,
        password: req.body.password
    };
    const send = await store.create(newUser);
    var token = jsonwebtoken_1.default.sign({ user: send }, secret);
    res.json(token);
};
const authenticate = async (req, res) => {
    try {
        const user = {
            id: 99,
            first: req.body.firstName,
            last: req.body.lastName,
            password: req.body.password
        };
        const existingUser = await store.authenticate(user);
        var token = jsonwebtoken_1.default.sign({ user: existingUser }, secret);
        res.json(token);
    }
    catch (error) {
        res.send("Unable to Reach Server");
    }
};
const userRoutes = (app) => {
    app.get('/users/all', index);
    app.get('/users/:id', show);
    app.post('/users/create', create);
    app.post('/users/login', authenticate);
};
exports.default = userRoutes;
