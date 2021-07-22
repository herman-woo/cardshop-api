import { OrdersProductsStore } from "../orders-products";
const store = new OrdersProductsStore()

describe("The Orders-Products Model", () => {
    it('should have a method to create cart Items',() => {
        expect(store.create).toBeDefined();
    })
    it('should have a method to read the cart',() => {
        expect(store.read).toBeDefined();
    })
    it('should have a method to delete cart Items',() => {
        expect(store.delete).toBeDefined();
    })
    it('should create a cart Item', async () => {
        const result = await store.create('2','1','5')
        expect(result).toEqual([{ id: 1, order_id: '2', product_id: '1', order_quantity: 5 }]);
    })
    it('should create a second cart Item', async () => {
        const result = await store.create('2','2','10')
        expect(result).toEqual([{ id: 2, order_id: '2', product_id: '2', order_quantity: 10}]);
    })
    it('should return an array of 2 cart Items', async () => {
        const result = await store.read('2')
        expect(result).toEqual([{ id: 1, order_id: '2', product_id: '1', order_quantity: 5 },{ id: 2, order_id: '2', product_id: '2', order_quantity: 10}]);
    })
    it('should remove a cart Item', async () => {
        const result = await store.delete('1')
        expect(result).toEqual([]);
    })
    it('should return an array of 1 cart Item', async () => {
        const result = await store.read('2')
        expect(result).toEqual([{ id: 2, order_id: '2', product_id: '2', order_quantity: 10}]);
    })
})