import express from 'express'
import { OrdersProductsStore } from '../models/orders-products'
import jwt, { Secret } from 'jsonwebtoken'
const secret = process.env.TOKEN_SECRET as Secret
const store = new OrdersProductsStore()

const addToCart = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const order = req.body.orderID
    const product = req.body.productID
    const qty = req.body.quantity
    const add = await store.create(order,product,qty)
    res.json(add)
}
const removeFromCart = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const item = req.body.cartItem
    const cart = await store.delete(item)
    res.json(cart)
}
const getCart = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const order = req.body.orderID
    const cart = await store.read(order)
    res.json(cart)
}
const orderProductRoutes = (app: express.Application) => {
    app.post('/users/:id/orders/cart/add', addToCart)
    app.delete('/users/:id/orders/cart/remove', removeFromCart)
    app.post('/users/:id/orders/cart', getCart)
}

export default orderProductRoutes