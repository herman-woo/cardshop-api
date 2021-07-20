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
})