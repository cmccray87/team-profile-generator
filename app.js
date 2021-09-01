const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// prompt - user roles
function employeeInfo() {
   inquirer.prompt([
    {
      type: "list",
      message: "What type of employee would you like to input",
      name: "name",
      choices: ["Manager", "Engineer", "Intern", "Show Summary"],
    },
  ]).then(val => {
    if (val.name === "Manager") {
      managerInfo();
    } else if (val.name === "Engineer") {
      engineerInfo()
    } else if (val.name === "Intern") {
      internInfo();
    } else if (val.name === "Show Summary") {
      generateHTML(outputPath, render(team));
    };
  }); 
}; // end of function 

// prompt - manager info
function managerInfo() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your manager's id",
      name: "id",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your manager's office number",
      name: "number",
    },
  ]).then(function(answer) {
    let manager = new Manager(answer.name, answer.id, answer.email, answer.number)
    team.push(manager);

    employeeInfo()
  })
}; // end of function 


// prompt - engineer info
function engineerInfo() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your engineer's ID",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your engineer's GitHub username",
      name: "GitHub",
    },
  ]).then(function(answer) {
    let engineer = new Engineer(answer.name, answer.id, answer.email, answer.GitHub)
    team.push(engineer);

    employeeInfo()
  })
}; 


// prompt - intern info
function internInfo() {
  return inquirer.prompt([
    {
      type: "input",
      message: "what is your intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your intern's ID",
      name: "id",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your intern's school",
      name: "school",
    },
  ]).then(function(answer) {
    let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
    team.push(intern);

    employeeInfo()
  })
}; 

// write answers
function generateHTML(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfully written your Employee Summary");
  });
};

// Calls function to begin prompt for roles to enter
employeeInfo();

