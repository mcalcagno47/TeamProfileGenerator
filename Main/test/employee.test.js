const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        // positive test
        it("should create an object with a name, id and email of a new employee if provided with valid arguments", () => {
            const employee = new Employee("Picard", 2893, "JLPicard@Enterprise.space");

            // verify that the new object has the correct properties
            expect(employee.name).toEqual("Picard");
            expect(employee.id).toEqual(2893);
            expect(employee.email).toEqual("JLPicard@Enterprise.space");
        });

        it("should throw an error if provided no arguments", () => {
            // Wrap the object initialization in a callback function that Jest will run
            const cb = () => new Employee();

            // Verify that an error was thrown in the callback function
            expect((cb) => toThrow());
        });

        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Picard");

            // Define the error message that is expected to be thrown
            const err = new Error("Expected parameter 'id' to exist");

            // Verify that the correct error was thrown when the callback is executed
            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 283, "JLPicard@Enterprise.space");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Picard", "2893", "JLPicard@Enterprise.space");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("Picard", -2893, "JLPicard@Enterprise.space");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect((cb) => toThrowError(err));
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Picard", 2893, 47);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect((cb) => toThrowError(err));
        });
    });
});