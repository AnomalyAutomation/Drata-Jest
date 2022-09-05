import {rest} from "msw";
import {server} from "../mocks/server";
const github = require("../api/github");

// A simple example test
describe("User Object", () => {
  it("#getUser: should load user data", () => {
    return github.getUser("AnomalyAutomation").then((data) => {
      console.log(data.status.code);

      expect(data).toBeDefined();
      expect(data.entity[0].name).toEqual("Juan Gonzales");
    });
  });

  it("#getshould load user data", () => {
    return github.getUsersSince(53061651, 10).then((data) => {
      let arr = data.entity.length;
      console.log(arr);
      expect(data).toBeDefined();
      expect(data.entity).toHaveLength(10);
    });
  });
});
