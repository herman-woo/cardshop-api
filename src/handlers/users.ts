import express from 'express'
import UserStore from '../models/users'
import { User } from '../models/users'
const store = new UserStore()

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

const userRoutes = (app: express.Application) => {
    app.get('/users/all', index)
    app.get('/users/:id', show)
    app.post('/users/create', create)
}

export default userRoutes