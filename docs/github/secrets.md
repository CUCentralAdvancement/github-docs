# Secrets Management

When your application makes requests to an external API, that external API usually requires you to provide 
authentication identifiers and/or passwords in order to complete a successful request. This is not only 
over `https://` but you can also think of external APIs with `redis://` or other protocols. 

During development, it is fine to quickly insert an API key in the code to test out a connection, but you 
should always switch to using an environmental variable. The way to load and include environmental 
variables will vary from project to project, but it usually looks like this.

```shell
# Put the key into an .env file loaded via some dependency.
echo "SERVICE_API_KEY=abde2345ms" >> .env

# Place the env var in the process start command.
SERVICE_API_KEY="abde2345ms" yarn dev
```

Then in code, you pull the value attached to the variable constant.

```js
const fileService = new fs(process.env.SERVICE_API_KEY);
```

## GitHub Secrets Admin UI

GitHub has great documentation on how to create and manage secrets that you should read first.

https://docs.github.com/en/actions/reference/encrypted-secrets

After reading that and getting the basic idea of how to add and manage secrets there are a few things to 
go over specific to repositories managed under the Digital Engagement team. We'll list them in order of 
creating and managing a new project.

1. When setting up your project and reserving a dyno on Heroku, take note of any resources you will need 
   to use and what the connection strings are for "config vars", what Heroku calls environmental variables.
   More info can be found in the [Heroku Docs repo](https://github.com/CUCentralAdvancement/heroku-docs/blob/main/README.md#config-vars).
2. Locally, create an `.env.example` file including the variable names found in the Heroku admin UI. Also 
   add a note about where to find them. Keeping variable names consistent is important for seemless 
   integration between local and production environments.
3. When creating your CI pipeline, use GitHub's UI to add repository secrets.
4. Don't forget to [add the same secrets to the Dependabot tab](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot?learn=dependency_version_updates). 

## Troubleshooting

You might run into a few issues with secret management that can cause CI test runs to fail.

### Dependabot CI run fails but when you recreate it the tests pass

You probably forgot to expose secrets to Dependabot which has to be done in a different tab than the regular repository secrets. The reason for this is that Dependabot creates a fork when making a PR and therefore your user doesn't kick off the CI checks.

You also need to create a separate file that tells GitHub when to run the CI check. For example, with Cypress test runs, you would set up the "jobs" section differnelty and use the pull request target event intsead of the usual pull request event.

```yaml
# For runs triggered by the Dependabot user.
name: Cypress Tests
on:
  pull_request_target:
    branches:
      - main
jobs:
  cypress-run:
    name: Cypress run
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    
    
# For runs triggered by your user.
name: Cypress Tests
on:
  pull_request:
    branches:
      - main
jobs:
  cypress-run:
    name: Cypress run
    runs-on: ubuntu-latest
    if: ${{ github.actor != 'dependabot[bot]' }}
```

You can view the sample files for Cypress test runs in https://github.com/CUCentralAdvancement/github-docs/tree/main/.github/workflows.

