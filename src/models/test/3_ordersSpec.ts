import { OrdersStore } from "../orders";
const store = new OrdersStore()

describe("The Orders Model", () => {
    it('should have a method to create orders',() => {
        expect(store.create).toBeDefined();
    })
    it('should have a method to get orders',() => {
        expect(store.read).toBeDefined();
    })
    it('should have a method to update orders',() => {
        expect(store.update).toBeDefined();
    })
    it('should create an order', async () => {
        const result = await store.create('1')
        expect(result).toEqual([]);
    })
    it('should read all orders', async () => {
        const result = await store.read('1')
        expect(result).toEqual([{
            id: 1,
            user_id: '1',
            order_status: 'active'
        }]);
    })
    it('should update another order', async () => {
        const result = await store.update({
            id:'1',
            userId: '1',
            status: 'completed'
        })
        expect(result).toEqual([]);
    })
    it('should create an order', async () => {
        const result = await store.create('1')
        expect(result).toEqual([]);
    })
})