function capitalize(word) {
  return word
    .toLowerCase()
    .replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
}

class Employee {
  constructor(name, id, email) {
    this.name = capitalize(name);
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
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
              <p class = "border bg-white p-3"> Email: <a "mailto: ${this.getEmail()}>${this.getEmail()}</a></p>
              </div>
              </div>
              </div>
              </div>
              `;
  }
}

module.exports = Employee;
