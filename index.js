const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
const fs = require('fs');




// ask questions
//prompts for user
const prompts = [{
    type: 'input',
    message: "Welcome to the team builder! First things first, what is the Team Manager's name?",
    name: 'Manager'
}, {
    type: 'input',
    message: "What is the Team Manager's Employee ID, please enter integers only.",
    name: 'ManagerID'
},{
    type: 'input',
    message: "What is the Team Manager's office number?",
    name: 'ManagerOffice'
},{
    type: 'input',
    message: "What is the Team Manager's email?",
    name: 'ManagerEmail'
},{
    type: 'list',
    message: "What team member would you like to add next? Please use arrow keys to continue.",
    choices: ['Engineer', 'Intern', 'None'],
    name:'NextEmployee'
}, {
    type:'input',
    message: "What is the Engineer's name?",
    name: 'EngineerName'
}, {
    type:'input',
    message:"What is the Engineer's Employee ID, please enter integers only.",
    name:'EngineerID'
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
}, {
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
}, 
]

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
		<title>EXAMPLE</title>
	</head>
	<body class="text-center">
	<h1 class="text-success"> ${data.name}</h1>
	<h4> ${data.location}</h4>
	<div>
		<p> ${data.bio}</p>
	</div>
	<div>
		<h5>Contact Me!</h5>
		${data.linkedIn}
		${data.GitHub}
	</div>
	<p class="text-danger"> coded by a hungry student</p>
		
	</body>
	</html>

`
}


function init(){
    inquirer.prompt(prompts)
    .then((data) => {
        console.log(data)
        fs.writeFile('index.html', createTemplate(data), ()=> {
            console.log('success')
        })
    })
    .catch((error) => {
        if (error.isTtyError){
            console.log(error)
        } else {
            console.log(error)
        }
    })
}

init()

// instantiate Employee based on inputted data


// build html