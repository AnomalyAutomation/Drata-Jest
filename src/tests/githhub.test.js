import {getUser, getUsersSince} from "../api/github";
describe("User Object", () => {
  //Given when then format
  //Multiple Describe Blocks
  //Verify if Plan = X then Disk _Usage = y
  //Contains expected Properties - Test for all Keys that come back

  it("#getUser: Should load user data", async () => {
    // given:
    const user = "AnomalyAutomation";
    const userName = "Juan Gonzales";
    // when:
    const res = await getUser(user);
    //then:
    expect(res.status.code).toEqual(200);
    expect(res).toBeDefined();
    expect(res.entity[0].name).toEqual(userName);
  });

  it("#getUser: ERROR: Undefined User Argument", () => {
    return getUser().then((data) => {
      expect(data).toBeDefined();
      expect(data.status.code).toEqual(404);
      expect(data.entity[0].message).toEqual("Not Found");
    });
  });

  it("#getUsersSince: Amount per Page", () => {
    return getUsersSince(53061651, 10).then((data) => {
      expect(data).toBeDefined();
      expect(data.entity).toHaveLength(10);
    });
  });

  it("#getUsersSince: Returns starting with User AFTER entered ID", () => {
    return getUsersSince(53061650, 10).then((data) => {
      expect(data).toBeDefined();
      expect(data.entity[0].id).toEqual(53061651);
    });
  });
});
