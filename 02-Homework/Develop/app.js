const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const workerArray = [];


const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Managers name '
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'Manager ID number'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'Managers Email'
    },

    {
        type: 'input',
        name: 'office',
        message: 'Managers office number'
    },
]

const engineerQuestions = [

    {
        type: 'input',
        name: 'engiName',
        message: 'Engineers name'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Engineers ID number'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Engineers email adress'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Engineers GitHub user name'
    },
]

const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Intern Name'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Intern ID',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Intern Email'
    },

    {
        type: 'input',
        name: 'school',
        message: 'intern School',
    },
]

//add another employee

const anotherEmp = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
        choices: ['Engineer', 'Intern', 'Done']
    }
]
inquirer
    .prompt([
        
    ])



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
