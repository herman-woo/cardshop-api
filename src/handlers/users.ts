import express from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import UserStore from '../models/users'
import { User } from '../models/users'
const store = new UserStore()
const secret = process.env.TOKEN_SECRET as Secret

const index = async (req: express.Request, res: express.Response) =>{
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const data = await store.index()
    res.json(data)
}

const show = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const data = await store.show(req.params.id)
    res.json(data)
}

const create = async (req: express.Request, res: express.Response) => {
    try{
        const auth = req.headers.authorization as string
        const token = auth.split(' ')[1]
        jwt.verify(token, secret)
    }
    catch(error){
        res.status(401)
        res.json(`Invalid token ${error}`)
    }
    const newUser:User = {
        id:99,
        first: req.body.first,
        last: req.body.last,
        password: req.body.password
    }
    const send = await store.create(newUser)
    res.json(send)
}

const authenticate = async (req: express.Request, res: express.Response) => {
    try{
        const user:User = {
            id:99,
            first : req.body.firstName,
            last: req.body.lastName,
            password: req.body.password
        }
        const existingUser = await store.authenticate(user)
        var token = jwt.sign({user: existingUser},secret)
        res.json(token)
    }
    catch(error){
        res.send("Unable to Reach Server")
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users/all', index)
    app.get('/users/:id', show)
    app.post('/users/create', create)
    app.post('/users/login', authenticate)
}

export default userRoutes