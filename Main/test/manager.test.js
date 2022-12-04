const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a name, id and email of a new Manager if provided with valid arguments", () => {
            const manager = new Manager("Riker", 80102, "WTRiker@Enterprise.space", "Deck 10, Forward");

            // verify that the new object has the correct properties
            expect(manager.name).toEqual("Riker");
            expect(manager.id).toEqual(80102);
            expect(manager.email).toEqual("WTRiker@Enterprise.space");
            expect(manager.officeNumber).toEqual("Deck 10, Forward")
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Manager();

            // Verify that an error was thrown in the callback function
            expect((cb) => toThrow());
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Manager("Riker");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to exist");

            // Verify that the correct error was thrown when the callback is executed
            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Manager(3, 283, "WTRiker@Enterprise.space", "Deck 10, Forward");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Manager("Riker", "80102", "WTRiker@Enterprise.space", "Deck 10, Forward");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Manager("Riker", -80102, "WTRiker@Enterprise.space", "Deck 10, Forward");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Manager("Riker", 80102, 47, "Deck 10, Forward");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'Number' is not a string", () => {
            const cb = () => new Manager("Riker", 80102, "WTRiker@Enterprise.space", 71854);
            const err = new Error("Expected parameter 'Number' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });
    });
});