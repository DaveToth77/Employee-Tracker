
const cTable = require('console.table');
const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes');

const app = express();

const welcome = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'start',
        message: `
            ====================
            Employee Manager Pro
            ====================
           Press Enter to continue`
    },])
    .then(mainMenu)
};

const mainMenu = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'menuChoices',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'View All Employees By Department', 'View All Employees Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager' ]
    }]
    .then())
}





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});