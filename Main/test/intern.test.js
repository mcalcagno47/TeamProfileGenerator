const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a name, id and email of a new Intern if provided with valid arguments", () => {
            const intern = new Intern("Crusher", 74205, "WCrusher@Enterprise.space", "Starfleet Academy");

            // verify that the new object has the correct properties
            expect(intern.name).toEqual("Crusher");
            expect(intern.id).toEqual(74205);
            expect(intern.email).toEqual("WCrusher@Enterprise.space");
            expect(intern.School).toEqual("Starfleet Academy")
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Intern();

            // Verify that an error was thrown in the callback function
            expect((cb) => toThrow());
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Intern("Crusher");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to exist");

            // Verify that the correct error was thrown when the callback is executed
            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(3, 283, "WCrusher@Enterprise.space", "Starfleet Academy");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Crusher", "74205", "WCrusher@Enterprise.space", "Starfleet Academy");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Intern("Crusher", -74205, "WCrusher@Enterprise.space", "Starfleet Academy");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern("Crusher", 74205, 47, "Starfleet Academy");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'School' is not a string", () => {
            const cb = () => new Intern("Crusher", 74205, "WCrusher@Enterprise.space", 71854);
            const err = new Error("Expected parameter 'School' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });
    });
});