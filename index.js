const inquirer = require("inquirer");
const fs = require("fs");
const { choices } = require("yargs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/htmlTemplate");

employeeBucket = [];

const managerInputFormat = [
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

const addEmployeeInputFormat = [
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add another employee?",
    choices: [
      "Yes, add Engineer",
      "Yes, add Intern",
      "No, I do not want to add another employee",
    ],
  },
];

const addEngineerInputFormat = [
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
    message: "What is the employee's github username?",
  },
];

const addInternInputFormat = [
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

const addManager = async () => {
  const result = await inquirer.prompt(managerInputFormat);
  console.log(result.email);
  const managerInstance = new Manager(
    result.name,
    result.id,
    result.email,
    result.officeNumber
  );
  employeeBucket.push(managerInstance);
  addEmployee();
};

const addEmployee = async () => {
  const result = await inquirer
    .prompt(addEmployeeInputFormat)
    .then(function (result) {
      switch (result.addEmployee) {
        case "Yes, add Engineer":
          addEngineer();
          break;

        case "Yes, add Intern":
          addIntern();
          break;

        case "No, I do not want to add another employee":
          buildPage();
          break;
        default:
          console.log(result);
          console.warn("unsupported case found");
      }
    });
};

const addEngineer = async () => {
  const result = await inquirer.prompt(addEngineerInputFormat);
  const engineerInstance = new Engineer(
    result.name,
    result.id,
    result.email,
    result.github
  );
  employeeBucket.push(engineerInstance);
  addEmployee();
};

const addIntern = async () => {
  const result = await inquirer.prompt(addInternInputFormat);
  const internInstance = new Intern(
    result.name,
    result.id,
    result.email,
    result.school
  );
  employeeBucket.push(internInstance);
  addEmployee();
};

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

const buildPage = () => {
  console.log(employeeBucket);

  writeToFile("./dist/index.html", generateHtml(employeeBucket));
};

addManager();
