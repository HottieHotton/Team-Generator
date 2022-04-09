const Intern = require("../lib/Intern");

test("creates intern object", () => {
  const intern = new Intern("Dave", 5, "dave@gmail.com", "UofU");

  expect(intern.school).toEqual(expect.any(String));
});
