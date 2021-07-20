import { OrdersStore,Order } from "../orders";
const store = new OrdersStore()

describe("The Orders Model", () => {
    it('should have a method to get orders',() => {
        expect(store.getOrders).toBeDefined();
    })
    it('should have an place orders',() => {
        expect(store.placeOrder).toBeDefined();
    })
    it('should get active orders', async () => {
        const result = await store.getOrders('1','active')
        const length = result?.length
        expect(length).toEqual(1);
    })
    it('should create an order', async () => {
        const result = await store.placeOrder({
            productId: 7,
            qty: 3,
            userId:'1',
            status:'active'
        })
        expect(result).toEqual([]);
    })
})