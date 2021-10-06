const cTable = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const apiRoutes = require('./routes/apiRoutes');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'public00',
    database: 'employees'
});

Console.log(`
_____                _                         _____              _             
|  ___|              | |                       |_   _|            | |            
| |__ _ __ ___  _ __ | | ___  _   _  ___  ___    | |_ __ __ _  ___| | _____ _ __ 
|  __| '_ `
    _\ | '_ \| |/ _ \| | | |/ _ \/ _ \   | | '
    __ / _ ` |/ __| |/ / _ | '__|
| |__| | | | | | |_) | | (_) | |_| |  __|  __/   | | | | (_| | (__|   |  __| |   
\____|_| |_| |_| .__/|_|\___/ \__, |\___|\___|   \_|_|  \__,_|\___|_|\_\___|_|   
               | |             __/ |                                             
               |_|            |___/                                               ` + '\n'
);

connection.connect(function (err) {
    if (err) throw err;
    mainMenu();
});

const mainMenu = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'menuChoices',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add a Role',
                'Add an Employee',
                'Update Employee Role',                
                'Exit'
            ]
        }]
        .then(answer => {
            switch (answer.mainMenu) {
                case "View All Employees":
                    viewAllEmployees();
                    break;

                case "View All Departments":
                    viewAllDept();
                    break;

                case "View All Roles":
                    viewAllRoles();
                    break;

                case "Add an Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDept();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        }))
}