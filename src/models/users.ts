import Client from "../database";
import { Order } from "./orders";

export type User = {
    first: String;
    last: String;
    password: String;
}

class UserStore {
    target: String = "users"
    index = async () => {
        try{
            const sql = `SELECT * FROM ${this.target}`
            const connection = await Client.connect()
            const result = await connection.query(sql)
            return result.rows
        }
        catch(err){
            console.log(err)
        }
    }
    show = async (id: String) => {
        try{
            const db = await Client.connect()
            const result = await db.query(`SELECT * FROM ${this.target} WHERE id=${id}`)
            db.release()
            return result.rows[0]
        }
        catch(err){
            console.log(err)
        }       
    }
    create = async (user: User) => {
        try{
            const sql = 'INSERT INTO users (first,last,password) VALUES ($1,$2,$3) RETURNING *'
            const db = await Client.connect()
            const newEntry = await db.query(sql,[user.first,user.last,user.password])
            db.release()
            return newEntry.rows[0]
        }
        catch(err){
            console.log(err)
        }
    }
}

export default UserStore