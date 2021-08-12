"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../users"));
const store = new users_1.default();
describe("The Users Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have an show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have an create method', () => {
        expect(store.index).toBeDefined();
    });
    it('should Create User1', async () => {
        const result = await store.create({
            id: 99,
            first: "Udacity",
            last: "user",
            password: "password"
        });
        expect(result !== null).toBeTrue();
    });
    it('should Authenticate User1', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "user",
            password: "password"
        });
        expect(result !== null).toBeTrue();
    });
    it('should not Authenticate User1', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Udacity",
            last: "user",
            password: "pasddddddsword"
        });
        expect(result === undefined).toBeTrue();
    });
    it('should not find any user', async () => {
        const result = await store.authenticate({
            id: 3,
            first: "Uuuuudacity",
            last: "moruuuue",
            password: "pasddddddsword"
        });
        expect(result === undefined).toBeTrue();
    });
});
