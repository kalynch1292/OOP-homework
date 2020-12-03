const Employee = require('./Employee');
class Engineer extends Employee{
   constructor(name, id, email, github){
       super(name, id, email);
       this.github = github;
       this.title = 'Engineer';
   } 
   getGithub(){
       return this.github;
   }
   getRole(){
       return this.title;
   }
}
module.exports = Engineer


// //class Rectangle extends Shape {
//     constructor(sideA, sideB) {
//         const area = sideA * sideB;
//         const perimeter = sideA * 2 + sideB * 2;
    
//         super(area, perimeter);
//         this.sideA = sideA;
//         this.sideB = sideB;
//       }
//     }
    
//     const rectangle = new Rectangle(12, 9);
//     rectangle.printInfo();
    