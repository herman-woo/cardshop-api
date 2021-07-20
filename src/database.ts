import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { ENV } = process.env

const database_variable = (): Pool => {
    if (ENV === 'dev') {
        console.log("Run Dev db")    
    return new Pool({
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD
    })
    }

    else {
        console.log("Run Test By default")
        return new Pool({
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_TEST_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD
        })
    }
}
const Client = database_variable()
export default Client