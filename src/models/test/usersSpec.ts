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
    it('should return 2 users', async () => {
        const result = await store.index()
        expect(result).toEqual([
            {
                "id": 1,
                "first": "Udacity",
                "last": "User",
                "password": "$2b$10$WltCDZpoLzijod/jmXnlSOwSzg8uvP4FB86oegDzwZhy2disIoTNq"
            },
            {
                "id": 2,
                "first": "Udacity",
                "last": "Twoser",
                "password": "$2b$10$rgSYX6RuHqNnsSjmNmf2fu0oGKlwe1z7qz32TkHQT3V6sufOr84qG"
            }]
        );
    })
    it('should Show User2', async () => {
        const result = await store.show('2')
        expect(result).toEqual({
            id: 2,
            first: "Udacity",
            last: "Twoser",
            password: "$2b$10$rgSYX6RuHqNnsSjmNmf2fu0oGKlwe1z7qz32TkHQT3V6sufOr84qG"
        });
    })
    it('should Create User3', async () => {
        const result = await store.create({
            id:  99,
            first: "Udacity",
            last: "more",
            password: "password"
        })
        expect(result !== null).toBeTrue();
    })
    it('should Authenticate User3', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "more",
            password: "password"
        })
        expect(result !== null).toBeTrue();
    })
    it('should not Authenticate User3', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "more",
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