import Client from "../database";
export type Order = {
    productId: Number;
    qty: Number;
    userId: String;
    status: String;
}

export class OrdersStore {
    target: String = "orders"
    getOrders = async (userId:String,status:String):Promise<Order[] | undefined> => {
        try{
            const id = userId
            const sql = 'SELECT orders.id,first,last,product_name,order_quantity,order_status FROM orders INNER JOIN products ON orders.product_id=products.id INNER JOIN users ON orders.user_id=users.id WHERE user_id=$1 AND order_status=$2'
            const connection = await Client.connect()
            const orders = await connection.query(sql,[id,status])
            connection.release()
            return orders.rows
        }
        catch(err){
            return err
        }
    }
    placeOrder = async (order:Order) => {
        try{
            const sql = 'INSERT INTO orders (product_id,order_quantity,user_id,order_status) VALUES ($1,$2,$3,$4)'
            const connection = await Client.connect()
            const orders = await connection.query(sql,[order.productId,order.qty,order.userId,order.status])
            connection.release()
            return orders.rows
        }
        catch(err){
            return err
        }
    }
}
