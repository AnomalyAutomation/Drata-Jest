import {getUser, getUsersSince} from "../api/github";
describe("User Object", () => {
  //Contains expected Properties - Test for all Keys that come back
  describe("#getUser", () => {
    // Assumption/Data test per Assessment
    it("Should load user data: Name", async () => {
      // given:
      const user = "AnomalyAutomation";
      const userName = "Juan Gonzales";
      // when:
      const res = await getUser(user);
      //then:
      expect(res.status.code).toEqual(200);
      expect(res).toBeDefined();
      expect(res.entity[0]).toHaveProperty("name");
      expect(res.entity[0].name).toEqual(userName);
    });
    // Assuption of expected returned props and types
    it("Should return expected props/types", async () => {
      // given:
      const user = "AnomalyAutomation";
      // when:
      const res = await getUser(user);
      //then:
      expect(res.status.code).toEqual(200);
      expect(res).toBeDefined();
      expect(res.entity[0]).toEqual(
        expect.objectContaining({
          login: expect.any(String),
          site_admin: expect.any(Boolean),
          id: expect.any(Number),
        })
      );
    });
    //Error Test per Assessment
    it("404 ERROR: Undefined User Argument", async () => {
      // given:
      const user = "undefined";
      // when:
      const res = await getUser(user);
      // then:
      expect(res).toBeDefined();
      expect(res.status.code).toEqual(404);
      expect(res.entity[0].message).toEqual("Not Found");
    });
    //Plan test per Assessment
    it("Plan Name should correspond with Plan Package", async () => {
      // given:
      const user = "octocat";
      // when:
      const res = await getUser(user);
      // then:
      expect(res).toBeDefined();
      expect(res.status.code).toEqual(200);
      console.log(res.entity[0].plan.name);
      if (res.entity[0].plan.name == "Medium") {
        expect(res.entity[0].plan.space).toEqual(400);
        expect(res.entity[0].plan.private_repos).toEqual(20);
        expect(res.entity[0].plan.collaborators).toEqual(0);
      }
    });
  });

  describe("#getUsersSince", () => {
    it("Amount should match Amount per Page Argument", async () => {
      // given:
      const since = 53061650;
      const per_page = 10;
      // when:
      const res = await getUsersSince(since, per_page);
      // then:
      expect(res).toBeDefined();
      expect(res.entity).toHaveLength(10);
    });

    it("Should start with User Id after Entered Argument", async () => {
      // given:
      const since = 53061650;
      const per_page = 10;
      // when:
      const res = await getUsersSince(since, per_page);
      // then:
      expect(res).toBeDefined();
      expect(res.entity[0].id).toEqual(53061651);
    });
  });
});
