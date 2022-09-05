import {rest} from "msw";
import {server} from "../mocks/server";
const github = require("../api/github");

// A simple example test
describe("#getUser()", () => {
  it("should load user data -Name", () => {
    return github.getUser("AnomalyAutomation").then((data) => {
      console.log(data.status.code);

      expect(data).toBeDefined();
      expect(data.entity[0].name).toEqual("Juan Gonzales");
    });
  });

  xit("should load user data", () => {
    return github.getUser("AnomalyAutomation").then((data) => {
      //console.log(data);
      expect(data).toBeDefined();
      expect(data.entity[0].name).toEqual("Juan Gonzales");
    });
  });
});
