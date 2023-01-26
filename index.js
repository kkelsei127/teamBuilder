const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');

const roles = require('./src/roles');

const teamArray = [];


// ask questions
//prompts for user
const managerPrompts = [{
    type: 'input',
    message: "Welcome to the team builder! First things first, what is the Team Manager's name?",
    name: 'ManagerName'
}, {
    type: 'input',
    message: "What is the Team Manager's Employee ID, please enter integers only.",
    name: 'ManagerID',
},{
    type: 'input',
    message: "What is the Team Manager's office number?",
    name: 'ManagerOffice'
},{
    type: 'input',
    message: "What is the Team Manager's email?",
    name: 'ManagerEmail'
}]

const engineerPrompts = [{
    type:'input',
    message: "What is the Engineer's name?",
    name: 'EngineerName'
}, {
    type:'input',
    message:"What is the Engineer's Employee ID, please enter integers only.",
    name:'EngineerID',
   
}, {
    type:'input',
    message:"What is the Engineer's office number?",
    name:'EngineerOffice'
}, {
    type:'input',
    message:"What is the Engineer's email?",
    name: 'EngineerEmail'
}, {
    type:'input',
    message:"What is the Engineer's GitHub username?",
    name:'EngineerGithub'
}]

const internPrompts = [{
    type:'input',
    message: "What is the Intern's name?",
    name: 'InternName'
}, {
    type:'input',
    message:"What is the Intern's Employee ID, please enter integers only.",
    name:'InternID'
}, {
    type:'input',
    message:"What is the Intern's office number?",
    name:'InternOffice'
}, {
    type:'input',
    message:"What is the Intern's email?",
    name: 'InternEmail'
}, {
    type:'input',
    message:"What is the Intern's school?",
    name:'InternSchool'
},]

function createManager(){
    inquirer.prompt(managerPrompts)
    .then(data => {
        //create new manager instance here using answers from manager prompts
        const instance = new Manager(data.ManagerName, data.ManagerID, data.ManagerEmail, data.ManagerOffice)
        //push new manager instance into Team array
        teamArray.push(instance)
        selectEmployee()
    })
}

function createEngineer(){
    inquirer.prompt(engineerPrompts)
    .then(data => {
        //create new engineer instance here using answers from engineer prompts
        const instance = new Engineer(data.EngineerName, data.EngineerID, data.EngineerEmail, data.EngineerGithub)
        //push new engineer instance into Team array
        teamArray.push(instance)
        //push new engineer instance into Team array
        selectEmployee()
    })
}


function createIntern(){
    inquirer.prompt(internPrompts)
    .then(data => {
        //create new intern instance here using answers from intern prompts
        const instance = new Intern(data.InternName, data.InternID, data.InternEmail, data.InternSchool)
        //push new intern instance into Team array
        teamArray.push(instance)
        //push new intern instance into Team array
        selectEmployee()
    })
}

//this allows the user to select an employee and pulls the selected employees prompts
function selectEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            message: "What team member would you like to add next? Please use arrow keys to continue.",
            choices: ['Engineer', 'Intern', 'None'],
            name:'NextEmployee'
        }
    ]).then(data => {
        if(data.NextEmployee === "Engineer") {
            createEngineer()
        } else if(data.NextEmployee === "Intern"){
            createIntern()
        }else {
            fs.writeFile('./dist/index.html', roles(teamArray), ()=> {
            console.log('success') })
        }
    })
}

createManager()
