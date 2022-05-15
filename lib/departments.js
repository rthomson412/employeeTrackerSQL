const db = require("../db/connection");
const cTable = require('console.table');
const inquirer = require("inquirer");

// inquirer prompts
const startInquirer = () => {
    inquirer.prompt([
      {
        type: "list",
        name: "toDo",
        message: "What would you like to do?",
        choices: [
          "- View - departments",
          "- View - roles",
          "- View - employees",

          "+Add+ department",
          "+Add+ role",
          "+Add+ employee",

          "^Update^ employee role",
          "^Update^ manager of employee",

          "- View - employees by manager",
          "- View - employees by department",

          "** Remove ** a department",
          "** Remove ** a role",
          "** Remove ** an employee",
          "Exit"
        ]
      }
    ])
    .then(answers => {
        const nextPrompt = answers.toDo;
        if (nextPrompt === "- View - departments") {
          viewDepartments();
        };
    
        if (nextPrompt === "- View - roles") {
          viewRoles();
        };
    
        if (nextPrompt === "- View - employees") {
          viewEmployees();
        };
    
        if (nextPrompt === "+Add+ department") {
          addDepartment();
        };
    
        if (nextPrompt === "+Add+ role") {
          addRole();
        };
    
        if (nextPrompt === "+Add+ employee") {
          addEmployee();
        };
    
        if (nextPrompt === "^Update^ employee role") {
          updateEmployeeRole();
        };
    
        if (nextPrompt === "^Update^ manager of employee") {
          updateEmployeeManager();
        };
    
        if (nextPrompt === "- View - employees by manager") {
          viewByManager();
        };
    
        if (nextPrompt === "- View - employees by department") {
          viewByDepartment();
        };
    
        if (nextPrompt === "** Remove ** a department") {
          removeDepartment();
        };
    
        if (nextPrompt === "** Remove ** a role") {
          removeRole();
        };
    
        if (nextPrompt === "** Remove ** an employee") {
          removeEmployee();
        };
    
        if (nextPrompt === "Exit") {
          process.exit();
        };
      })
    };

    const viewDepartments = () => {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, rows) => {
          if (err) {
            throw err;
          }
          console.log("\n");
          console.table(rows);
          return startInquirer();
        });
      };
      