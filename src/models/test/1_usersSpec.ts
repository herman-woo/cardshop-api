import UserStore from "../users";

const store = new UserStore()

describe("The Users Model", () => {
    it('should have an index method',() => {
        expect(store.index).toBeDefined();
    })
    it('should have an show method',() => {
        expect(store.show).toBeDefined();
    })
    it('should have an create method',() => {
        expect(store.index).toBeDefined();
    })
    it('should Create User1', async () => {
        const result = await store.create({
            id:  99,
            first: "Udacity",
            last: "user",
            password: "password"
        })
        expect(result !== null).toBeTrue();
    })
    it('should Authenticate User1', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "user",
            password: "password"
        })
        expect(result !== null).toBeTrue();
    })
    it('should not Authenticate User1', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "user",
            password: "pasddddddsword"
        })
        expect(result === undefined).toBeTrue();
    })
    it('should not find any user', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Uuuuudacity",
            last: "moruuuue",
            password: "pasddddddsword"
        })
        expect(result === undefined).toBeTrue();
    })    
})