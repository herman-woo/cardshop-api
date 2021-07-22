import Client from "../database";
export type Order = {
    id: String;
    userId: String;
    status: String;
}

export class OrdersStore {
    target: String = "orders"
    create = async (id:String) => {
        try{
            const sql = 'INSERT INTO orders (user_id,order_status) VALUES ($1,$2)'
            const connection = await Client.connect()
            const orders = await connection.query(sql,[id,'active'])
            connection.release()
            return orders.rows
        }
        catch(error){
            console.log("could not create new order")
        }
    }
    read = async (id:String) => {
        try{
            const sql = 'SELECT * FROM orders WHERE user_id=$1'
            const connection = await Client.connect()
            const orders = await connection.query(sql,[id])
            connection.release()
            return orders.rows
        }
        catch(error){
            console.log("could not find any orders for user")
        }
    }
    update = async (update:Order) => {
        try{
            const order = update.id
            const user = update.userId
            const status = update.status
            const sql = 'UPDATE orders SET order_status=$1 WHERE id=$2 AND user_id=$3'
            const connection = await Client.connect()
            const orders = await connection.query(sql,[status,order,user])
            connection.release()
            return orders.rows
        }
        catch(error){
            console.log("could not update order",error)
        }
    }
}
