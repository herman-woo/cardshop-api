import ProductStore from "../products";
import { Product } from "../products";

const store = new ProductStore()

describe("The Products Model", () => {
    it('should have an index method',() => {
        expect(store.index).toBeDefined();
    })
    it('should have an show method',() => {
        expect(store.show).toBeDefined();
    })
    it('should have an create method',() => {
        expect(store.index).toBeDefined();
    })
    it('should Create a new card', async() => {
        const result = await store.create({
            id: 99,
            product_name: "new card",
            product_price: 999,
            product_stock: 100,
            card_rarity: "ultimate",
            card_type: "monster",
            card_atk: 1000,
            card_def: 1000,
            card_lv: 7,
            card_description: "testing card",
            card_img_url: ""
        })
        expect(result).toEqual({
            id: 1,
            product_name: "new card",
            product_price: 999,
            product_stock: 100,
            card_rarity: "ultimate",
            card_type: "monster",
            card_atk: 1000,
            card_def: 1000,
            card_lv: 7,
            card_description: "testing card",
            card_img_url: ""
        });
    })
    it('should Create a new card', async() => {
        const result = await store.create({
            id: 99,
            product_name: "new card two",
            product_price: 999,
            product_stock: 100,
            card_rarity: "ultimate",
            card_type: "monster",
            card_atk: 1000,
            card_def: 1000,
            card_lv: 7,
            card_description: "testing card",
            card_img_url: ""
        })
        expect(result).toEqual({
            id: 2,
            product_name: "new card two",
            product_price: 999,
            product_stock: 100,
            card_rarity: "ultimate",
            card_type: "monster",
            card_atk: 1000,
            card_def: 1000,
            card_lv: 7,
            card_description: "testing card",
            card_img_url: ""
        });
    })
    it('should show a specified card', async() => {
        const result = await store.show('2')
        expect(result).toEqual({
            id: 2,
            product_name: "new card two",
            product_price: 999,
            product_stock: 100,
            card_rarity: "ultimate",
            card_type: "monster",
            card_atk: 1000,
            card_def: 1000,
            card_lv: 7,
            card_description: "testing card",
            card_img_url: ""
        });
    })
    it('should Return an array of 2 objects', async() => {
        const result = await store.index()
        const test = result
        expect(result).toEqual([
            {
                id: 1,
                product_name: "new card",
                product_price: 999,
                product_stock: 100,
                card_rarity: "ultimate",
                card_type: "monster",
                card_atk: 1000,
                card_def: 1000,
                card_lv: 7,
                card_description: "testing card",
                card_img_url: ""
            },
            {
                id: 2,
                product_name: "new card two",
                product_price: 999,
                product_stock: 100,
                card_rarity: "ultimate",
                card_type: "monster",
                card_atk: 1000,
                card_def: 1000,
                card_lv: 7,
                card_description: "testing card",
                card_img_url: ""
            }
        ]);
    })
})