import Client from "../database";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
const saltRounds = (process.env.SALT_ROUNDS as unknown) as string
const pepper = (process.env.BCRYPT_PASSWORD as unknown) as string

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
    create = async (user: User):Promise<User | undefined> => {
        try{
            const pw = user.password
            const hash = bcrypt.hashSync(pw+pepper,parseInt(saltRounds))
            const sql = 'INSERT INTO users (first,last,password) VALUES ($1,$2,$3) RETURNING *'
            const db = await Client.connect()
            const newEntry = await db.query(sql,[user.first,user.last,hash])
            db.release()
            return newEntry.rows[0]
        }
        catch(err){
            console.log(err)
        }
    }
    authenticate = async (user: User): Promise<User | null> => {
        const conn = await Client.connect()
        const sql = 'SELECT password FROM users WHERE first=$1 AND last=$2'
        const result = await conn.query(sql, [user.first,user.last])
        const password = user.password
        if(result.rows.length) {
          const user = result.rows[0]
          console.log(user)
          if (bcrypt.compareSync(password+pepper, user.password)) {
            return user
          }
        }
    return null
    }
}

export default UserStore