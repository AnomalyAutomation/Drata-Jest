const github = require("../api/github");

// A simple example test
describe("#getUser() using Promises", () => {
  it("should load user data", () => {
    return github.getUser("AnomalyAutomation").then((data) => {
      console.log(data);
      expect(data).toBeDefined();
      expect(data.entity[0].name).toEqual("Koen van Gilst");
    });
  });
});
