import express from 'express'
import { Order, OrdersStore } from '../models/orders'
import jwt, { Secret } from 'jsonwebtoken'
const secret = process.env.TOKEN_SECRET as Secret
const store = new OrdersStore()

const getOrders = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const userID = req.params.id
    const orders = await store.read(userID)
    res.json(orders)
}
const newOrder = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const userID = req.params.id
    const order = await store.create(userID)
    res.json(order)
}
const updateOrder = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const updateOrder:Order = {
        id : req.body.orderID,
        userId : req.params.id,
        status: req.body.status
    }
    const order = await store.update(updateOrder)
    res.json(order)
}


const orderRoutes = (app: express.Application) => {
    app.get('/users/:id/orders', getOrders)
    app.post('/users/:id/orders/create', newOrder)
    app.post('/users/:id/orders/update', updateOrder)
}

export default orderRoutes