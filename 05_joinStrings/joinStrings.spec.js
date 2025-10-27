const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Adam", () => {
    expect(values.firstName).toEqual("Adam");
  });
  test("lastName is Smith", () => {
    expect(values.lastName).toEqual("Smith");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 2000", () => {
    expect(values.birthYear).toEqual(2000);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Adam Smith and I am 25 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Adam Smith", () => {
    expect(values.fullName).toEqual("Adam Smith");
  });
  test("age is 25", () => {
    expect(values.age).toEqual(25);
  });
});
