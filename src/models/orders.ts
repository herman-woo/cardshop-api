import Client from "../database";
export type Order = {
    productId: Number;
    qty: Number;
    userId: String;
    status: String;
}

export class OrdersStore {
    table: String = "orders"
    update = async (orderId:String, update: String) => {
        try{
            const sql = 'UPDATE orders SET order_status=$2 WHERE id=$1'
            const db = await Client.connect()
            const result = await db.query(sql,[orderId,update])
            db.release()
            return result.rows[0]
        }
        catch(err){
            console.log(err)
        }       
    }
}