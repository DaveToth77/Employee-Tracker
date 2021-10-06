
const cTable = require('console.table');
const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes');

const app = express();







app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});