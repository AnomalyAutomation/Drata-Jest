import {rest} from "msw";
export const handlers = [
  rest.get(
    "https://api.github.com/users/AnomalyAutomation",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            login: "AnomalyAutomation",
            id: 53061651,
            node_id: "MDQ6VXNlcjUzMDYxNjUx",
            avatar_url: "https://avatars.githubusercontent.com/u/53061651?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/AnomalyAutomation",
            html_url: "https://github.com/AnomalyAutomation",
            followers_url:
              "https://api.github.com/users/AnomalyAutomation/followers",
            following_url:
              "https://api.github.com/users/AnomalyAutomation/following{/other_user}",
            gists_url:
              "https://api.github.com/users/AnomalyAutomation/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/AnomalyAutomation/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/AnomalyAutomation/subscriptions",
            organizations_url:
              "https://api.github.com/users/AnomalyAutomation/orgs",
            repos_url: "https://api.github.com/users/AnomalyAutomation/repos",
            events_url:
              "https://api.github.com/users/AnomalyAutomation/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/AnomalyAutomation/received_events",
            type: "User",
            site_admin: false,
            name: "Juan Gonzales",
            company: null,
            blog: "",
            location: null,
            email: null,
            hireable: null,
            bio: null,
            twitter_username: null,
            public_repos: 2,
            public_gists: 0,
            followers: 0,
            following: 0,
            created_at: "2019-07-18T20:42:53Z",
            updated_at: "2022-09-04T15:04:22Z",
          },
        ])
      );
    }
  ),

  // rest.post('http://localhost:3030/order', (req, res, ctx) => {
  //   return res(ctx.json({ orderNumber: 123455676 }));
  // }),
];
