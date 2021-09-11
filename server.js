const mysql = require('mysql2');
const inquirer = require("inquirer");
const table = require("console.table");

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

function askQuestions() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "View all employees",
            "View all departments",
            "Add an employee",
            "Add a departmentt",
            "Add a role",
            "Update employee role",
            "QUIT"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "View all employees":
                viewEmployees()
                break;

            case "View all departments":
                viewDepartments()
                break;

            case "Add an employee":
                addEmployee()
                break;

            case "Add a department":
                addDepartment()
                break;

            case "Add a role":
                addRole()
                break;

            case "Update employee role":
                updateEmployeeRole();
                break;

            default:
                connection.end()
                break;
        }
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        askQuestions();
    })
}


        askQuestions();
    