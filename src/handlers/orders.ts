import express from 'express'
import { OrdersStore } from '../models/orders'

const store = new OrdersStore()

const complete = async (req: express.Request, res: express.Response) => {
    const orderId = req.params.id
    const send = await store.update(orderId,'completed')
    res.json(send)
}
const reopen = async (req: express.Request, res: express.Response) => {
    const orderId = req.params.id
    const send = await store.update(orderId,'active')
    res.json(send)
}

const orderRoutes = (app: express.Application) => {
    app.post('/orders/:id/complete', complete)
    app.post('/orders/:id/complete', reopen)
}

export default orderRoutes