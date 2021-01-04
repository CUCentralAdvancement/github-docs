# Cypress

Cypress is a test runner, library, and hosted dashboard all in one package: https://docs.cypress.io/. CU Central
Advancement uses Cypress in a number of different capacities to perform any task a browser can be programmed to
complete. Coupled with Cypress' interactive nature, there are many staff processes that can be improved by using
Cypress in addition to using it for automated testing of codebases.

## Installation

You can add Cypress to any repository via `npm`, the node package manager. It comes bundled with `node.js`, and 
you can find the instructions to download both at: https://nodejs.org/en/

Cypress itself has great tutorials and philosophy on writing tests that you can follow to gain an introduction
to using it as a testing framework.

- Installing Cypress - https://docs.cypress.io/guides/getting-started/installing-cypress.html
- Introduction to writing tests - https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html

- What is Cypress?  - https://docs.cypress.io/guides/overview/why-cypress.html
- Understanding tradeoffs - https://docs.cypress.io/guides/references/trade-offs.html

### Adding Cypress To A Project

Once `npm` and `node` are installed, you can add Cypress to a project.

```bash
# If no package.json file in your repo.
npm init

# Several Cypress-related dependencies exist, but we will start with just the main package.
npm add -D cypress
```

Then, you'll want to add a set of testing commands to `package.json`. These will allow you to run tests from the 
command line via `npm run cy:test` or open the Cypress IDE via `npm run cy:open`

```json
  "scripts": {
    "cy:test": "CYPRESS_baseUrl=https://giving-test.cu.edu cypress run --spec \"cypress/integration/automated/**/*\"",
    "cy:open": "CYPRESS_baseUrl=https://giving-test.cu.edu cypress open"
  },
```

- `CYPRESS_baseUrl=` can be replaced with an environmental variable, but placing it before the command 
works when testing an external system whose base URL doesn't change.
- The `--spec` option narrows down tests to the ones in that directory.

## First Test Run And IDE Intro

Before you make any test runs, Cypress won't have installed needed files to make the test runner work. You will need to
kick off that process by running one of the commands listed about. Let's go with `yarn cy:open` since that will land us
in the Cypress IDE after initialization.

```bash
# Start Cypress for the first time.
yarn cy:open

# You should see logs about installing Cypress in your terminal...
```

Then, your computer should pull you over to the desktop area to show the Cypress IDE with a list of tests you can run as 
well as change some settings. I won't go into those settings or cross-browser testing. We will use the default settings and
Chromium browser to run our tests.

The IDE overview screen lists all the tests you have in your codebase under the `/cypress` root directory. If you want to run
a specific test, you can click on the test to do so and it will open up Chrome to run the specified test.

![screenshot of IDE overview screen](../assets/cypress-ide.png)

## Test Structure

The example project at [insert link here](#) has a `/cypress` directory you should copy to all projects. It will provide stubs for
tests in a pre-defined directory structure and pattern. The main distinction is between running tests manually vs. in an automated 
fashion.

```
- automated/
 -- smoke/
  --- feature-group/
   ---- feature-test.js
  --- general-test.js
 -- regression/
  -- issue-5678.js
- manual/
  -- manual-test.js
```

- automated - By default, `npm run cy:test` will run all tests under the `/cypress/integration/automated/` directory. These tests 
require no human intervention and can be run from the command line.
  - smoke - These tests touch as many things as possible testing features end-to-end
    - feature-group - If enough tests relate to a feature, then it deserves its own directory.
  - regression - These tests relate to bugs and have GH issue numbers attached to them.
- manual - These tests can be run via the IDE and `npm run cy:open`. Tests will pause at moments where a human needs to inspect 
and interact with a UI.

Most tests should be written in an automated fashion, but it can be easier to pause tests if a UI becomes difficult to test. Also, 
some requirements, like testing screen readers and visual regression for UIs are very hard to automate vs. human verification.
