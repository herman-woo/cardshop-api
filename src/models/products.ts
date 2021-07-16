import Client from "../database"
export type Product = {
    name: String;
    price: Number;
    rarity: String;
    cardType: String;
}

class ProductStore {
    target: string = "products";
    index = async ():Promise<Product[] | undefined> => {
        try{
            const sql = 'SELECT * FROM products'
            const db = await Client.connect()
            const result = await db.query(sql)
            db.release()
            return result.rows
        }
        catch(err){
            console.log(err)
        }   
    }
    show = async (id: String):Promise<Product | undefined> => {
        try{
            const db = await Client.connect()
            const result = await db.query(`SELECT * FROM products WHERE id=${id}`)
            db.release()
            return result.rows[0]
        }
        catch(err){
            console.log(err)
        }       
    }
    create = async (card: Product):Promise<Product | undefined> => {
        try{
            const sql = 'INSERT INTO products (product_name, product_price, card_rarity,card_type) VALUES ($1, $2, $3, $4) RETURNING *'
            const db = await Client.connect()
            const newEntry = await db.query(sql,[card.name,card.price,card.rarity,card.cardType])
            db.release()
            return newEntry.rows[0]
        }
        catch(err){
            console.log('database error',err)
        }
    }
    topFive = () => {
        return 'Top 5 Sales for Cards'
    }
    selection = () => {
        return 'Specific Query of Cards to return'
    }
}


export default ProductStore