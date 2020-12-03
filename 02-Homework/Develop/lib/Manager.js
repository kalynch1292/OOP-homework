module.exports = Manager
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }
    getEmail(){
        return this.email
    }
    getName(){
        return this.name
    }
    getRole(){
        return this.title;
    }
    getId(){
        return this.id;
    }
}
module.exports = Employee;