[<-- Home](/readme.md)

# Project Code Review

The DE (Digital Engagement) team doesn't have many developers working within it. Furthermore, most,
if not all, current projects are new territories for the developers working on them.

To have proper code review, you first need to understand the codebase, language, and potential
framework you might be using. If a developer has no context to any of those items, they can only
look for very generic issues in a PR (pull request).

For these reasons, all the current code review is performed by bots. As projects progress, they will
adopt more formalized code review using GitHub's PR review features. There should also be a
distinction between

## Automated Bots

All of these bots run on GitHub and will be located in the `.github/` directory of each project.
Every project should run them once a day or on PRs.

- **Dependabot** - This bot keeps all projects as up-to-date with their dependencies as possible.
- **Stalebot** - This bot gently closes issues that have been neglected keeping the issue queue
  clean.
- **Code Linting bot** - This bot will differ by language/framework but tests code style against
  community standards.
- **Test running bots** - These bots run unit and system tests on PRs and any push to the `main`
  branch.

## Manual Review

Heroku Pipelines allow for a Review App stage where stakeholders can view a version of the app
running before merging code into the `dev` branch. In this case, assign the stakeholder as a
reviewer on the GitHub PR page. They should be able to click "View Deployment" and be taken to the
deployed Heroku Review App.

For more information:
https://github.com/CUCentralAdvancement/heroku-docs/blob/master/README.md#pipelines
