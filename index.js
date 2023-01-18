const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = []


// ask questions
//prompts for user
const prompts = [{
    type: 'input',
    message: "Welcome to the team builder! First things first, what is the Team Manager's name?",
    name: 'ManagerName'
}, {
    type: 'number',
    message: "What is the Team Manager's Employee ID, please enter integers only.",
    name: 'ManagerID',
    // validate: 'Please enter numbers only.'
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
    type:'number',
    message:"What is the Engineer's Employee ID, please enter integers only.",
    name:'EngineerID',
    // validate: 'Please enter numbers only.'
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
    name:'EngineerGitHub'
}]

const internPrompts = [{
    type:'input',
    message: "What is the Intern's name?",
    name: 'InternName'
}, {
    type:'number',
    message:"What is the Intern's Employee ID, please enter integers only.",
    name:'InternID',
    // validate: 'Please enter numbers only.'
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
    inquirer.prompt(prompts)
    .then(data => {
        //create new manager instance here using answers from manager prompts
        const instance = new Manager(data.ManagerName, data.ManagerID, data.ManagerEmail, data.ManagerOffice)
        //push new manager instance into Team array
        teamArray.push(instance)
        console.log(teamArray)
        selectEmployee()
    })
}

function createEngineer(){
    inquirer.prompt(engineerPrompts)
    .then(data => {
        //create new manager instance here using answers from manager prompts
        //push new manager instance into Team array
        selectEmployee()
    })
}


function createIntern(){
    inquirer.prompt(internPrompts)
    .then(data => {
        //create new manager instance here using answers from manager prompts
        //push new manager instance into Team array
        selectEmployee()
    })
}

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
            fs.writeFile('index.html', createTemplate(teamArray), ()=> {
                            console.log('success')
                        })
        }
    })
}

function createTemplate(data){
    return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		/>
		<title>Team Builder</title>
	</head>
	<body class="text-center">
    <header>
        <h1 class="text-danger">Welcome to my Team!</h1>
    </header>
    <main>
        <div class="row container justify-content-end col-9">
            <div class="col-sm">
                <h2 class="text-success"> ${data.ManagerName}</h2>
                <h4>${data.ManagerID}</h4>
                <div>
                    <h5>Contact Me!</h5>
                    <a href="mailto:${data.ManagerEmail}?subject=We have a problem!"
                        target="_blank">${data.ManagerEmail}</a>
                    <p>My office is located here: ${data.ManagerOffice}</p>
                </div>
            </div>
        </div>
        <div class="row container justify-content-end col-9">
            <div class="col-sm">
                <h2 class="text-success"> ${data.EngineerName}</h2>
                <h4>${data.EngineerID}</h4>
                <div>
                    <h5>Contact Me!</h5>
                    <a href="mailto:${data.EngineerEmail}?subject=Help needed!"
                        target="_blank">${data.EngineerEmail}</a>
                    <p>${data.EngineerGitHub}</p>
                    <p>My office is located here: ${data.EngineerOffice}</p>
                </div>
            </div>
        </div>
        <div class="row container justify-content-end col-9">
            <div class="col-sm">
                <h2 class="text-success"> ${data.InternName}</h2>
                <h4>${data.InternID}</h4>
                <div>
                    <h5>Contact Me!</h5>
                    <a href="mailto:${data.InternEmail}?subject=You're doing great, sweetie!"
                        target="_blank">${data.InternEmail}</a>
                    <p>I currently study at ${data.InternSchool}</p>
                    <p>My office is located here: ${data.InternOffice}</p>
                </div>
            </div>
        </div>
    </main>
	</body>
	</html>
`
}

createManager()
// function init(){
//     inquirer.prompt(prompts)
    
//     .then((data) => {
//         console.log(data)
//         function (data) {if (data.NextEmployee === "Engineer") {
//             inquirer.prompt(engineerPrompts)} else if
//             (data.NextEmployee === "Intern") {
//                     inquirer.prompt(internPrompts)
//                 }}
//         fs.writeFile('index.html', createTemplate(data), ()=> {
//             console.log('success')
//         })
//     })
//     .catch((error) => {
//         if (error.isTtyError){
//             console.log(error)
//         } else {
//             console.log(error)
//         }
//     })
// }

// init()

// build html