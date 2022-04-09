const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getHtmlRepresentation() {
    return `
    <div class = "col-sm-4">
    <div class="card mb-4">
    <div class="card-title bg-primary border p-3">
                  <h1>${this.getName()}</h1>
                  <h2>${this.getRole()}</h2>
              </div>
    <div class="card-body bg-light">
      
              <div class = "p-3">
              <p class = "border bg-white p-3"> Employee ID: ${this.getId()}</p>
              <p class = "border bg-white p-3"> Email: <a "mailto:${this.getEmail()}">${this.getEmail()}</a></p>
              <p class = "border bg-white p-3"> Office Number: ${this.getOfficeNumber()}</p>
              </div>
              </div>
              </div>
              </div>
              `;
  }
}

module.exports = Manager;
