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

  it("#getUser: undefined User Argument", () => {
    return github.getUser().then((data) => {
      expect(data).toBeDefined();
      expect(data.status.code).toEqual(404);
      expect(data.entity[0].message).toEqual("Not Found");
    });
  });

  it("#getUsersSince: Amount per Page", () => {
    return github.getUsersSince(53061651, 10).then((data) => {
      expect(data).toBeDefined();
      expect(data.entity).toHaveLength(10);
    });
  });

  it("#getUsersSince: Returns starting with User AFTER entered ID", () => {
    return github.getUsersSince(53061650, 10).then((data) => {
      expect(data).toBeDefined();
      expect(data.entity[0].id).toEqual(53061651);
    });
  });
});
