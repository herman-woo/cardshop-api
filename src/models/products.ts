import Client from "../database"
export type Product = {
    id: number;
    product_name: string;
    product_price: number;
    product_stock: number;
    card_rarity: string;
    card_type: String;
    card_atk: number;
    card_def: number;
    card_lv: number;
    card_description: string;
    card_img_url: string;
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
            const sql = 'INSERT INTO products (product_name, product_price, product_stock, card_rarity, card_type, card_atk, card_def, card_lv, card_description, card_img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *'
            const db = await Client.connect()
            const newEntry = await db.query(sql,[card.product_name,card.product_price,card.product_stock,card.card_rarity,card.card_type,card.card_atk,card.card_def,card.card_lv,card.card_description,card.card_img_url])
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