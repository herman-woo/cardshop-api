import ProductStore from "../products";
import { Product } from "../products";

const store = new ProductStore()

describe("Testing Products Model", () => {
    it('should have an index method',() => {
        expect(store.index).toBeDefined();
    })
    it('should have an show method',() => {
        expect(store.show).toBeDefined();
    })
    it('should have an create method',() => {
        expect(store.index).toBeDefined();
    })
    it('should show a specified card', async() => {
        const result = await store.show('4')
        expect(result).toEqual({
            id: 4,
            product_name: "Winged Dragon of Ra",
            product_price: 999,
            card_rarity: "ultimate",
            card_type: "monster"
        });
    })
    it('should Return an array of 20 objects', async() => {
        const result = await store.index()
        const test = result
        expect(result).toEqual([
            {
                "id": 1,
                "product_name": "Dark Magician",
                "product_price": 125,
                "card_rarity": "super",
                "card_type": "monster"
            },
            {
                "id": 2,
                "product_name": "Blue-eyes White Dragon",
                "product_price": 500,
                "card_rarity": "ultra",
                "card_type": "monster"
            },
            {
                "id": 3,
                "product_name": "Red-eyes Black Dragon",
                "product_price": 50,
                "card_rarity": "rare",
                "card_type": "monster"
            },
            {
                "id": 4,
                "product_name": "Winged Dragon of Ra",
                "product_price": 999,
                "card_rarity": "ultimate",
                "card_type": "monster"
            },
            {
                "id": 5,
                "product_name": "Slifer the Sky Dragon",
                "product_price": 999,
                "card_rarity": "ultimate",
                "card_type": "monster"
            },
            {
                "id": 6,
                "product_name": "Obelisk the Tormentor",
                "product_price": 999,
                "card_rarity": "ultimate",
                "card_type": "monster"
            },
            {
                "id": 7,
                "product_name": "Summoned Skull",
                "product_price": 50,
                "card_rarity": "rare",
                "card_type": "monster"
            },
            {
                "id": 8,
                "product_name": "Celtic Guardian",
                "product_price": 5,
                "card_rarity": "common",
                "card_type": "monster"
            },
            {
                "id": 9,
                "product_name": "Time Wizard",
                "product_price": 15,
                "card_rarity": "uncommon",
                "card_type": "monster"
            },
            {
                "id": 10,
                "product_name": "Baby Dragon",
                "product_price": 2,
                "card_rarity": "common",
                "card_type": "monster"
            },
            {
                "id": 11,
                "product_name": "Thousand Dragon",
                "product_price": 25,
                "card_rarity": "rare",
                "card_type": "monster"
            },
            {
                "id": 12,
                "product_name": "Dark Sage",
                "product_price": 30,
                "card_rarity": "rare",
                "card_type": "monster"
            },
            {
                "id": 13,
                "product_name": "Dark Hole",
                "product_price": 30,
                "card_rarity": "rare",
                "card_type": "spell"
            },
            {
                "id": 14,
                "product_name": "Monster Reborn",
                "product_price": 30,
                "card_rarity": "rare",
                "card_type": "spell"
            },
            {
                "id": 15,
                "product_name": "Pot of Greed",
                "product_price": 30,
                "card_rarity": "rare",
                "card_type": "spell"
            },
            {
                "id": 16,
                "product_name": "Raigeki",
                "product_price": 30,
                "card_rarity": "rare",
                "card_type": "spell"
            },
            {
                "id": 17,
                "product_name": "Trap Hole",
                "product_price": 10,
                "card_rarity": "common",
                "card_type": "trap"
            },
            {
                "id": 18,
                "product_name": "Mirror Force",
                "product_price": 50,
                "card_rarity": "rare",
                "card_type": "trap"
            },
            {
                "id": 19,
                "product_name": "Spell-Binding Circle",
                "product_price": 50,
                "card_rarity": "rare",
                "card_type": "trap"
            },
            {
                "id": 20,
                "product_name": "Shadow Spell",
                "product_price": 75,
                "card_rarity": "super",
                "card_type": "trap"
            }
        ]);
    })
    it('should Create a new card', async() => {
        const result = await store.create({
            id: 99,
            product_name: "new card",
            product_price: 999,
            card_rarity: "ultimate",
            card_type: "monster"
        })
        expect(result).toEqual({
            id: 21,
            product_name: "new card",
            product_price: 999,
            card_rarity: "ultimate",
            card_type: "monster"
        });
    })

})