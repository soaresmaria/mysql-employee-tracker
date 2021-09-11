const mysql = require('mysql2');
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mango@0202",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

function askQuestions() {};


askQuestions();
