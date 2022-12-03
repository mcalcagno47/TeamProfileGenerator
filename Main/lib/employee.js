class Employee {
    constructor (name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    };
    getID() {
        return this.ID
    };
    getEmail() {
        return this.Email
    };
    getRole() {
        return "Employee"
    };
}

module.export = Employee