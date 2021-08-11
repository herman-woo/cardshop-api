import express from 'express'
import ProductStore from '../models/products'
import { Product } from '../models/products'
import Jwt, { Secret } from 'jsonwebtoken'
const store = new ProductStore()
const secret = process.env.TOKEN_SECRET as Secret

const index = async (req: express.Request, res: express.Response) =>{
    const data = await store.index()
    res.json(data)
}

const show = async (req: express.Request, res: express.Response) => {
    const data = await store.show(req.params.id)
    res.json(data)
}


const create = async (req: express.Request, res: express.Response) => {   
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        Jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const card: Product = {
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
    }
    try{
        const send = await store.create(card)
    res.json(send)}
    catch(err){
        res.send('Could not Create Card')
    }
}

const productRoutes = (app: express.Application) => {
    app.get('/products/all', index)
    app.get('/products/:id', show)
    app.post('/products/add', create)
}

export default productRoutes
