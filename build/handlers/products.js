"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../models/products"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store = new products_1.default();
const secret = process.env.TOKEN_SECRET;
const index = async (req, res) => {
    const data = await store.index();
    res.json(data);
};
const show = async (req, res) => {
    const data = await store.show(req.params.id);
    res.json(data);
};
const create = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        res.status(401);
        res.json(`Invalid token ${error}`);
    }
    const card = {
        id: 99,
        product_name: req.body.name,
        product_price: req.body.price,
        product_stock: req.body.stock,
        card_rarity: req.body.rarity,
        card_type: req.body.type,
        card_atk: req.body.atk,
        card_def: req.body.def,
        card_lv: req.body.lv,
        card_description: req.body.desc,
        card_img_url: req.body.imgURL
    };
    try {
        const send = await store.create(card);
        res.json(send);
    }
    catch (err) {
        res.send('Could not Create Card');
    }
};
const productRoutes = (app) => {
    app.get('/products/all', index);
    app.get('/products/:id', show);
    app.post('/products/add', create);
};
exports.default = productRoutes;
