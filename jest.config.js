const config = {
  testResultsProcessor: "./node_modules/jest-html-reporter",

  verbose: true,
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
      },
    ],
  ],
};

module.exports = config;
