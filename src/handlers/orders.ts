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
    const userId = req.params.id
    const orderStatus = req.params.status
    const send = await store.getOrders(userId,orderStatus)
    res.json(send)
}
const placeOrder = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    //since this route is for new orders, status will always be active
    const newOrderStatus = 'active'
    const newOrder:Order = {
        productId:req.body.productId,
        qty:req.body.qty,
        userId:req.params.id,
        status: newOrderStatus
    }

    const send = await store.placeOrder(newOrder)
    res.json(send)
}


const orderRoutes = (app: express.Application) => {
    app.post('/users/orders/:id/add', placeOrder)
    app.get('/users/orders/:id/:status',getOrders)
}

export default orderRoutes