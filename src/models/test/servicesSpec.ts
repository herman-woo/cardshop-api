import { Dashboard } from "../../services/services";
const dash = new Dashboard

describe("Testing Users Model", () => {
    it('should have a method to get orders',() => {
        expect(dash.getOrders).toBeDefined();
    })
    it('should have an place orders',() => {
        expect(dash.placeOrder).toBeDefined();
    })
    it('should get active orders', async () => {
        const result = await dash.getOrders('1','active')
        const length = result?.length
        expect(length).toEqual(1);
    })
    it('should create an order', async () => {
        const result = await dash.placeOrder({
            productId: 7,
            qty: 3,
            userId:'1',
            status:'active'
        })
        expect(result).toEqual([]);
    })
})