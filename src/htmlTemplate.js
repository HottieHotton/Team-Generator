function generateHtml(employeeBucket) {
  const employeeHtmlArray = [];
  const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team-Profile</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href = "./style.css">
  </head>

  <body>
  
  <header class= "banner">
  My Team 
  </header>
  
  <div class="row row-cols-1 row-cols-md-3 g-4">
  
  `;
  employeeHtmlArray.push(htmlHeader);
  for (let i = 0; i < employeeBucket.length; i++) {
    employeeHtmlArray.push(employeeBucket[i].getHtmlRepresentation());
  }

  const htmlFooter = `
  </div>
  
  </body>
  `;

  employeeHtmlArray.push(htmlFooter);
  return employeeHtmlArray.join("\r\n");
}

module.exports = generateHtml;
