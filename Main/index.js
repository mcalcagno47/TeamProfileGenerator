const inquirer = require("inquirer")
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const teamMembers = [];

createTeam();

function createManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'manager name',
        message: 'What is the managers name?',
    },
    {
        type: 'input',
        name: 'manager ID',
        message: 'What is the managers ID?'
    },
    {
        type: 'input',
        name: 'manager email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'manager office number',
        message: 'What is the managers office number?'
    }
    ])

        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerID,
                answers.managerEmail,
                answers.managerOfficeNumber,
            )
            teamMembers.push(manager)
            buildTeam()
        })
}

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'engineer name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'engineer ID',
        message: 'What is the engineers ID?'
    },
    {
        type: 'input',
        name: 'engineer email',
        message: 'What is the engineers email?'
    },
    {
        type: 'input',
        name: 'engineer github',
        message: 'What is the engineers github?'
    }])

        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerID,
                answers.engineerEmail,
                answers.engineerGithub,
            )
            teamMembers.push(engineer)
            buildTeam()
        })
}

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        name: 'Intern name',
        message: 'What is the Interns name?',
    },
    {
        type: 'input',
        name: 'Intern ID',
        message: 'What is the Interns ID?'
    },
    {
        type: 'input',
        name: 'Intern email',
        message: 'What is the Interns email?'
    },
    {
        type: 'input',
        name: 'Intern school',
        message: 'What is the Interns school?'
    }])

        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internID,
                answers.internEmail,
                answers.internSchool,
            )
            teamMembers.push(intern)
            buildTeam()
        })
}

function createTeam() {
    inquirer.prompt([{
        type: 'list',
        name: 'memberChoice',
        message: 'What team member do you want to add?',
        choices: ['Engineer', 'Intern', 'Manager']
    }])

        .then((userChoice) => {
            switch (userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer()
                    break
                case 'Intern':
                    addIntern()
                    break
                case 'Manager':
                    createManager()
                    break
                default:
                    buildTeam()
            }
        })
}