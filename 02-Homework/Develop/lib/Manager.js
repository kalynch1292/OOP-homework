const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }


}

module.exports = Manager

const managerOne = new Manager("kayla", "321", "thisis@gmail", "1234578")
console.log(managerOne)