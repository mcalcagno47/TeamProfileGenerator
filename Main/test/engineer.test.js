const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a name, id and email of a new Engineer if provided with valid arguments", () => {
            const engineer = new Engineer("LaForge", 1701, "GLaForge@Enterprise.space", "GLaForge4774");

            // verify that the new object has the correct properties
            expect(engineer.name).toEqual("LaForge");
            expect(engineer.id).toEqual(1701);
            expect(engineer.email).toEqual("GLaForge@Enterprise.space");
            expect(engineer.Github).toEqual("GLaForge4774")
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Engineer();

            // Verify that an error was thrown in the callback function
            expect((cb) => toThrow());
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Engineer("LaForge");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to exist");

            // Verify that the correct error was thrown when the callback is executed
            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Engineer(3, 283, "GLaForge@Enterprise.space", "GLaForge4774");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("LaForge", "1701", "GLaForge@Enterprise.space", "GLaForge4774");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Engineer("LaForge", -1701, "GLaForge@Enterprise.space", "GLaForge4774");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Engineer("LaForge", 1701, 47, "GLaForge4774");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'Github' is not a string", () => {
            const cb = () => new Engineer("LaForge", 1701, "GLaForge@Enterprise.space", 71854);
            const err = new Error("Expected parameter 'Github' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });
    });
});