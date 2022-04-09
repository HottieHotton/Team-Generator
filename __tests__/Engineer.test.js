const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
  const engineer = new Engineer(
    "Dave",
    5,
    "dave.miller@gmail.com",
    "dave.miller"
  );

  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.getRole()).toEqual("Engineer");
});
