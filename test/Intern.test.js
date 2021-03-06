const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "KU";
  const e = new Intern("Lightning", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Lightning", 1, "test@test.com", "KU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "KU";
  const e = new Intern("Lightning", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
