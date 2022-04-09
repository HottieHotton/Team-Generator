const Manager = require("../lib/Manager");

test("creates manager object", () => {
  const manager = new Manager("Dave", 5, "dave@gmail.com", 15);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
