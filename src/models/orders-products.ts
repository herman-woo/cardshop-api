import Client from "../database";


export class OrdersProductsStore {
    create = async (order:String,product:String,qty:String) => {
        try{
         const sql = 'INSERT INTO orders_products (order_id,product_id,order_quantity) VALUES ($1,$2,$3) RETURNING *'
        const connection = await Client.connect()
        const orderProd = await connection.query(sql,[order,product,qty])
        connection.release()
        return orderProd.rows   
        }
        catch(error){
            console.log(error)
        }
        
    }
    read = async (order:String) => {
        try{
         const sql = 'SELECT * FROM orders_products WHERE order_id=$1'
        const connection = await Client.connect()
        const cart = await connection.query(sql,[order])
        connection.release()
        return cart.rows   
        }
        catch(error){
            console.log(error)
        }
        
    }
    delete = async (item:String) => {
        try{
        const sql = 'DELETE FROM orders_products WHERE id=$1'
        const connection = await Client.connect()
        const cart = await connection.query(sql,[item])
        connection.release()
        return cart.rows   
        }
        catch(error){
            console.log(error)
        }
        
    }
}