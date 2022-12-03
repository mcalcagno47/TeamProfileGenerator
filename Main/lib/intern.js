const Employee = require('./employee');

class Intern extends Employee {
    constructor (name,id,email,School){
        super(name,id,email)
        this.School = School;
    }
    getSchool() {
        return this.School
    }
    getRole() {
        return "Intern"
    };
}

module.export = Intern