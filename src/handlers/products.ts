import express from 'express'
import ProductStore from '../models/products'
import { Product } from '../models/products'
const store = new ProductStore()

const index = async (req: express.Request, res: express.Response) =>{
    const data = await store.index()
    res.json(data)
}

const show = async (req: express.Request, res: express.Response) => {
    const data = await store.show(req.params.id)
    res.json(data)
}


const create = async (req: express.Request, res: express.Response) => {   
    const card: Product = {
        name: req.body.name,
        price: req.body.price,
        rarity: req.body.rarity,
        cardType: req.body.cardType,
    }
    try{
        const send = await store.create(card)
    res.json(send)}
    catch(err){
        res.send('Could not Create Card')
    }
}


const topFive = async (req: express.Request, res: express.Response) => {
    const data = await store.topFive
    res.send(data)
}

const selection = async (req: express.Request, res: express.Response) => {
    const data = await store.selection
    res.send(data)
}

const productRoutes = (app: express.Application) => {
    app.get('/products/all', index)
    app.get('/products/:id', show)
    app.post('/products/add', create)
}

export default productRoutes
