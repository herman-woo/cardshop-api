import express from 'express'
import UserStore from '../models/users'
import { User } from '../models/users'
import { Order } from '../models/orders'
import { Dashboard } from '../services/services'
const store = new UserStore()
const dash = new Dashboard()

const index = async (req: express.Request, res: express.Response) =>{
    const data = await store.index()
    res.json(data)
}

const show = async (req: express.Request, res: express.Response) => {
    const data = await store.show(req.params.id)
    res.json(data)
}

const create = async (req: express.Request, res: express.Response) => {
    const newUser:User = {
        first: req.body.first,
        last: req.body.last,
        password: req.body.password
    }
    const send = await store.create(newUser)
    res.json(send)
}
const getOrders = async (req: express.Request, res: express.Response) => {
    const userId = req.params.id
    const orderStatus = req.params.status
    const send = await dash.getOrders(userId,orderStatus)
    res.json(send)
}
const placeOrder = async (req: express.Request, res: express.Response) => {
    //since this route is for new orders, status will always be active
    const newOrderStatus = 'active'
    const newOrder:Order = {
        productId:req.body.productId,
        qty:req.body.qty,
        userId:req.params.id,
        status: newOrderStatus
    }

    const send = await dash.placeOrder(newOrder)
    res.json(send)
}
const userRoutes = (app: express.Application) => {
    app.get('/users/all', index)
    app.get('/users/:id', show)
    app.post('/users/create', create)
    app.post('/users/orders/:id/add', placeOrder)
    app.get('/users/orders/:id/:status',getOrders)
}

export default userRoutes