const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
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
              <p class = "border bg-white p-3"> Email: <a href = "mailto:${this.getEmail()}">${this.getEmail()}</a></p>
              <p class = "border bg-white p-3"> Github: <a href = "https://github.com/${this.getGithub()}" target: "_blank">${this.getGithub()}</a></p>
              </div>
              </div>
              </div>
              </div>
              
              `;
  }
}

module.exports = Engineer;
