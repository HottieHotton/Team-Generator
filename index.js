//All necessary calls
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/htmlTemplate");

//The array that holds all the created data
newArray = [];

//Inquirer involving creating a Manager
const managerInput = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

//Choices on what you want to create next
const employeeInput = [
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add another employee?",
    choices: [
      "Yes, add Engineer",
      "Yes, add Intern",
      "I have added everyone!",
    ],
  },
];

//Inquirer involving creating an engineer
const engineerInput = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the employee's GitHub username?",
  },
];

//Inquirer involving creating an intern
const internInput = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is this employee's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school is your intern attending?",
  },
];

//Data collected to create a new Manager
const addManager = async () => {
  const manager = await inquirer.prompt(managerInput);
  const newManager = new Manager(
    manager.name,
    manager.id,
    manager.email,
    manager.officeNumber
  );
  newArray.push(newManager);
  addEmployee();
};

//Function to send selected choices to correct functions
const addEmployee = async () => {
  const employer = await inquirer
    .prompt(employeeInput)
    if(employer.addEmployee === "Yes, add Engineer"){
      addEngineer();
    }else if(employer.addEmployee === "Yes, add Intern"){
      addIntern();
    }else if(employer.addEmployee === "I have added everyone!"){
      buildPage();
    }
};

//Data collected to create a new Engineer
const addEngineer = async () => {
  const engineer = await inquirer.prompt(engineerInput);
  const newEngineer = new Engineer(
    engineer.name,
    engineer.id,
    engineer.email,
    engineer.github
  );
  newArray.push(newEngineer);
  addEmployee();
};

//Data collected to create a new Intern
const addIntern = async () => {
  const intern = await inquirer.prompt(internInput);
  const newIntern = new Intern(
    intern.name,
    intern.id,
    intern.email,
    intern.school
  );
  newArray.push(newIntern);
  addEmployee();
};

//Writing all data to the index file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(data);
    if (err) {
      return err;
    } else {
      console.log("Success! Please click on 'index.html' to view");
    }
  });
}

//Making the index.html
const buildPage = () => {
  console.log(newArray);
  writeToFile("./dist/index.html", template(newArray));
};

addManager();
