const teamArray = require('../index')

const empRoles = {
    manager: 'Manager',
    engineer: 'Engineer',
    intern: 'Intern'
}

function mapEmployee(teamArray, role, createRole){
    const employees = teamArray
        .filter(employee => employee.getRole() === role)
        .map(role => createRole(role))
        .join('')

    return employees;
}


//create cards dynamically for manager
function createManager(manager){
    return `
    <div class="col s4">
        <div class="card cyan lighten-3">
            <div class="card content teal lighten-5 center-align">
                <h2 class="padding-top card-title">${manager.getName()}</h2>
            </div>
            <div class="card-content">
                <div class="card-content">
                    <span>ID: ${manager.getId()}</span>
                </div>
                <div class="card-content">
                    <span>Email:<a class='black-text' href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></span>
                </div>
                <div class="card-content">
                    <span>GitHub:<a href='https://github.com/${manager.getOfficeNumber()}' target='_blank' rel='noreferrer'> ${manager.getOfficeNumber()}</a></span>
                </div>
            </div>
        </div>
    </div>
            
    
    `
}

//create cards for engineer
function createEngineer(engineer){
    return `
    <div class="col s4">
        <div class="card cyan lighten-3">
            <div class="card content teal lighten-5 center-align">
                <h2 class="padding-top card-title">${engineer.name}</h2>
            </div>
            <div class="card-content">
                <div class="card-content">
                    <span>ID: ${engineer.id}</span>
                </div>
                <div class="card-content">
                    <span>Email:<a class='black-text' href='mailto:${engineer.email}'> ${engineer.email}</a></span>
                </div>
                <div class="card-content">
                    <span>GitHub:<a href='https://github.com/${engineer.github}' target='_blank' rel='noreferrer'> ${engineer.github}</a></span>
                </div>
            </div>
        </div>
    </div>       
    
    `
}

//create intern card dynamically
function createIntern(intern){
    return `
    <div class="col s4">
        <div class="card cyan lighten-3">
            <div class="card content teal lighten-5 center-align">
                <h2 class="padding-top card-title">${internPrompts.InternName}</h2>
            </div>
            <div class="card-content">
                <div class="card-content">
                    <span>ID: ${intern.id}</span>
                </div>
                <div class="card-content">
                    <span>Email:<a class='black-text' href='mailto:${intern.email}'> ${intern.email}</a></span>
                </div>
                <div class="card-content">
                    <span>GitHub:<a href='https://github.com/${intern.school}' target='_blank' rel='noreferrer'> ${intern.github}</a></span>
                </div>
            </div>
        </div>
    </div>    
    `
}

function createHTMLTemplate(employees) {
    const roles = [
        {
            role: empRoles.manager,
            create: createManager
        },
        {
            role: empRoles.engineer,
            create: createEngineer
        },
        {
            role: empRoles.intern,
            create: createIntern
        }
        
    ]
    const team = roles.map(role => mapEmployee(employees, role.role, role.create)).join('');

    return team;
}


//combine all the create roles above for one template
function createHTML(employees) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder!</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <header class='cyan lighten-1'>
            <div class='cyan lighten-1'>
                <h1 class='center-align'>Welcome to my team!</h1>
            </div>
        </header>
        <main>
            <section class='cards-section'>
                ${createHTMLTemplate(employees)}
            </section>
        </main>
    </body>
    </html>
    `;
}
module.exports = createHTML
    // mapEmployee, createEngineer, createIntern, createManager
