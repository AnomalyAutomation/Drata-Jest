import {rest} from "msw";
export const handlers = [
  rest.get("https://api.github.com/users/octocat", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          login: "octocat",
          id: 1,
          node_id: "MDQ6VXNlcjE=",
          avatar_url: "https://github.com/images/error/octocat_happy.gif",
          gravatar_id: "",
          url: "https://api.github.com/users/octocat",
          html_url: "https://github.com/octocat",
          followers_url: "https://api.github.com/users/octocat/followers",
          following_url:
            "https://api.github.com/users/octocat/following{/other_user}",
          gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/octocat/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/octocat/subscriptions",
          organizations_url: "https://api.github.com/users/octocat/orgs",
          repos_url: "https://api.github.com/users/octocat/repos",
          events_url: "https://api.github.com/users/octocat/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/octocat/received_events",
          type: "User",
          site_admin: false,
          name: "monalisa octocat",
          company: "GitHub",
          blog: "https://github.com/blog",
          location: "San Francisco",
          email: "octocat@github.com",
          hireable: false,
          bio: "There once was...",
          twitter_username: "monatheoctocat",
          public_repos: 2,
          public_gists: 1,
          followers: 20,
          following: 0,
          created_at: "2008-01-14T04:33:35Z",
          updated_at: "2008-01-14T04:33:35Z",
          private_gists: 81,
          total_private_repos: 100,
          owned_private_repos: 100,
          disk_usage: 10000,
          collaborators: 8,
          two_factor_authentication: true,
          plan: {
            name: "Medium",
            space: 400,
            private_repos: 20,
            collaborators: 0,
          },
        },
      ])
    );
  }),
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
  rest.get("https://api.github.com/users/undefined", (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json([
        {
          message: "Not Found",
          documentation_url: "https://docs.github.com/rest",
        },
      ])
    );
  }),
  rest.get("https://api.github.com/users", (req, res, ctx) => {
    const productIds = req.url.searchParams.getAll("since", "per_page");
    console.log(productIds);
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
        },
        {
          login: "scanumalla",
          id: 53061652,
          node_id: "MDQ6VXNlcjUzMDYxNjUy",
          avatar_url: "https://avatars.githubusercontent.com/u/53061652?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/scanumalla",
          html_url: "https://github.com/scanumalla",
          followers_url: "https://api.github.com/users/scanumalla/followers",
          following_url:
            "https://api.github.com/users/scanumalla/following{/other_user}",
          gists_url: "https://api.github.com/users/scanumalla/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/scanumalla/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/scanumalla/subscriptions",
          organizations_url: "https://api.github.com/users/scanumalla/orgs",
          repos_url: "https://api.github.com/users/scanumalla/repos",
          events_url:
            "https://api.github.com/users/scanumalla/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/scanumalla/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "jeanparle28",
          id: 53061653,
          node_id: "MDQ6VXNlcjUzMDYxNjUz",
          avatar_url: "https://avatars.githubusercontent.com/u/53061653?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jeanparle28",
          html_url: "https://github.com/jeanparle28",
          followers_url: "https://api.github.com/users/jeanparle28/followers",
          following_url:
            "https://api.github.com/users/jeanparle28/following{/other_user}",
          gists_url: "https://api.github.com/users/jeanparle28/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jeanparle28/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jeanparle28/subscriptions",
          organizations_url: "https://api.github.com/users/jeanparle28/orgs",
          repos_url: "https://api.github.com/users/jeanparle28/repos",
          events_url:
            "https://api.github.com/users/jeanparle28/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jeanparle28/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "cassandrafletcher",
          id: 53061654,
          node_id: "MDQ6VXNlcjUzMDYxNjU0",
          avatar_url: "https://avatars.githubusercontent.com/u/53061654?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cassandrafletcher",
          html_url: "https://github.com/cassandrafletcher",
          followers_url:
            "https://api.github.com/users/cassandrafletcher/followers",
          following_url:
            "https://api.github.com/users/cassandrafletcher/following{/other_user}",
          gists_url:
            "https://api.github.com/users/cassandrafletcher/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cassandrafletcher/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cassandrafletcher/subscriptions",
          organizations_url:
            "https://api.github.com/users/cassandrafletcher/orgs",
          repos_url: "https://api.github.com/users/cassandrafletcher/repos",
          events_url:
            "https://api.github.com/users/cassandrafletcher/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cassandrafletcher/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "tskormylo",
          id: 53061655,
          node_id: "MDQ6VXNlcjUzMDYxNjU1",
          avatar_url: "https://avatars.githubusercontent.com/u/53061655?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tskormylo",
          html_url: "https://github.com/tskormylo",
          followers_url: "https://api.github.com/users/tskormylo/followers",
          following_url:
            "https://api.github.com/users/tskormylo/following{/other_user}",
          gists_url: "https://api.github.com/users/tskormylo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tskormylo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tskormylo/subscriptions",
          organizations_url: "https://api.github.com/users/tskormylo/orgs",
          repos_url: "https://api.github.com/users/tskormylo/repos",
          events_url: "https://api.github.com/users/tskormylo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tskormylo/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Operakid94",
          id: 53061656,
          node_id: "MDQ6VXNlcjUzMDYxNjU2",
          avatar_url: "https://avatars.githubusercontent.com/u/53061656?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Operakid94",
          html_url: "https://github.com/Operakid94",
          followers_url: "https://api.github.com/users/Operakid94/followers",
          following_url:
            "https://api.github.com/users/Operakid94/following{/other_user}",
          gists_url: "https://api.github.com/users/Operakid94/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Operakid94/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Operakid94/subscriptions",
          organizations_url: "https://api.github.com/users/Operakid94/orgs",
          repos_url: "https://api.github.com/users/Operakid94/repos",
          events_url:
            "https://api.github.com/users/Operakid94/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Operakid94/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "17794149",
          id: 53061657,
          node_id: "MDQ6VXNlcjUzMDYxNjU3",
          avatar_url: "https://avatars.githubusercontent.com/u/53061657?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/17794149",
          html_url: "https://github.com/17794149",
          followers_url: "https://api.github.com/users/17794149/followers",
          following_url:
            "https://api.github.com/users/17794149/following{/other_user}",
          gists_url: "https://api.github.com/users/17794149/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/17794149/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/17794149/subscriptions",
          organizations_url: "https://api.github.com/users/17794149/orgs",
          repos_url: "https://api.github.com/users/17794149/repos",
          events_url: "https://api.github.com/users/17794149/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/17794149/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "TortisNetworks",
          id: 53061658,
          node_id: "MDQ6VXNlcjUzMDYxNjU4",
          avatar_url: "https://avatars.githubusercontent.com/u/53061658?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TortisNetworks",
          html_url: "https://github.com/TortisNetworks",
          followers_url:
            "https://api.github.com/users/TortisNetworks/followers",
          following_url:
            "https://api.github.com/users/TortisNetworks/following{/other_user}",
          gists_url:
            "https://api.github.com/users/TortisNetworks/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TortisNetworks/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TortisNetworks/subscriptions",
          organizations_url: "https://api.github.com/users/TortisNetworks/orgs",
          repos_url: "https://api.github.com/users/TortisNetworks/repos",
          events_url:
            "https://api.github.com/users/TortisNetworks/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TortisNetworks/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "nitro-blitz-enterprise",
          id: 53061659,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjUzMDYxNjU5",
          avatar_url: "https://avatars.githubusercontent.com/u/53061659?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nitro-blitz-enterprise",
          html_url: "https://github.com/nitro-blitz-enterprise",
          followers_url:
            "https://api.github.com/users/nitro-blitz-enterprise/followers",
          following_url:
            "https://api.github.com/users/nitro-blitz-enterprise/following{/other_user}",
          gists_url:
            "https://api.github.com/users/nitro-blitz-enterprise/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nitro-blitz-enterprise/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nitro-blitz-enterprise/subscriptions",
          organizations_url:
            "https://api.github.com/users/nitro-blitz-enterprise/orgs",
          repos_url:
            "https://api.github.com/users/nitro-blitz-enterprise/repos",
          events_url:
            "https://api.github.com/users/nitro-blitz-enterprise/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nitro-blitz-enterprise/received_events",
          type: "Organization",
          site_admin: false,
        },
        {
          login: "cemusal",
          id: 53061660,
          node_id: "MDQ6VXNlcjUzMDYxNjYw",
          avatar_url: "https://avatars.githubusercontent.com/u/53061660?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cemusal",
          html_url: "https://github.com/cemusal",
          followers_url: "https://api.github.com/users/cemusal/followers",
          following_url:
            "https://api.github.com/users/cemusal/following{/other_user}",
          gists_url: "https://api.github.com/users/cemusal/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cemusal/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cemusal/subscriptions",
          organizations_url: "https://api.github.com/users/cemusal/orgs",
          repos_url: "https://api.github.com/users/cemusal/repos",
          events_url: "https://api.github.com/users/cemusal/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cemusal/received_events",
          type: "User",
          site_admin: false,
        },
      ])
    );
  }),

  // rest.post('http://localhost:3030/order', (req, res, ctx) => {
  //   return res(ctx.json({ orderNumber: 123455676 }));
  // }),
];
