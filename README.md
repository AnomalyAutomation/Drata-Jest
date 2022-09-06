# Drata Test - Github API User tests
# **General:**

- React Test + Jest
- Mock Service Worker – to mock server responses
- No keys needed as Mock handlers are added and listen for specific requests

# **Run Methods:**

- Locally: yarn test
- gitActions: [https://github.com/AnomalyAutomation/Drata-Jest/actions/workflows/drataRemote.yml](https://github.com/AnomalyAutomation/Drata-Jest/actions/workflows/drataRemote.yml)
  - Run workflow \> Run WorkFlow
- Report can be found when viewing the build under "run tests" on the Actions page above

# **Mock Server:**

- Looked through Various types of mock servers, due to time constraints I decided to go with Mock Service Worker
- With more time I would have dug into:
  - GitHub api packages for JS
  - Jest-mock-server
  - Jest API + Koa API structures
  - Setting up Auth token to hit real api and compare to mock

# **Tests:**

- Assumption-User data/plan
- Green – expected prop/type returns
- Error – undefined returns
- Edge-case: I didn't specify a test for this because of time but would have added tests around the getUsersSince function (If user was newly created and their ID is input in the since then the return should be undefined as no users have been created after that user)

# **Comments:**

- I've always just reviewed dev Jest Tests, this was my first time building it out from scratch, and I learned there were many different ways I could have set it up.
- Towards the end I wanted to build in a reporter to display in gitActions but ran out of time
- I structured the tests based on Dev structures I've seen in the past, and used async instead of just returning the function.then((data)=\>{Assert.data}) as I've read its best practice for developers, but it could have really gone both ways.
- Same for Importing functions being tested instead of creating an object of the exported class containing thhe functions and calling them that way.
