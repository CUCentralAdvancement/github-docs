# Project Title

Intro sentence on the purpose of the project.

The readme will flow from the perspective of a new developer being 
on-boarded to your project. Each project readme template should be
filled in by the dev who created the project, and it needs to be 
finished before other developers should be asked to work on any project.

## Local Development Setup

The first thing another developer will want to do with your project is
install it locally, and this is why the local development setup is the
first heading in the readme.

Prerequisites:
- You might need to install something first.
- You should list `asdf`, Homebrew, Docker, and anything else here

It is best to write a series commands that a developer can run from the
command line. Putting everything in one `./installproject.sh` with a bunch
of options is overkill so start out by chaining together several commands
with some manual step instructions.

```bash
# The .env file is a standard matching names to Heorku config vars.
cp .env.example .env

# Change language dependencies based on .tool-versions.
asdf shell node 14.16.0
asdf shell yarn 1.22.0

# Since node is involved in most projects, use yarn to standardize
# running commands.

# Install dependencies with some package manager.
yarn deps:install

# Use yarn to start and stop Docker services.
yarn services:start
yarn services:stop

# Install a database.
yarn db:create

# Seed data.
yarn db:seed

# Run dev server.
yarn app:dev
```

As you can see, `yarn` is the standard for running commands. Rather than using 
different tools to run shell commands, standardizing on `yarn` allows us to better
group commands and run them similarly on Heroku and locally.

...should list the command prefixes:
- deps - Things to do with package management
- services - Things to do with Docker.
- db - Things to do with data.
- app - Things to do with the application server

After you finish writing the section, clone down your repository in a fresh directory
to see if you can follow the instructions and get a working site. Often times, there's
one or two key instructions left out in the first draft.

## Services

The first step of the previous install instructions was to set up environmental
variables for the services being used. Some install scripts require those variables
to be present when ran so it's important to list out the different services a 
developer will need to connect to.

Most of the environmental variables will be listed in Heroku's admin UI, but make
sure to mention where to find the config info.

Services:
- Something for media hosting
- Something for search
- Something for background worker/queue processing
- I think you get the point...

## Testing

Now that the developer has the project setup, server running locally, and they 
are connected to any necessary services, they should run the available tests and
make sure they are green. Furthermore, some sort of CI testing should be set up to 
run on each pull request to the main branch.

...need to link to testing methods docs/repo.

## Deployment

Now that the developer has green tests and everything running, they are about ready
to work on issues in the backlog. The last step is to make sure they know how to 
deploy the application. You should include everything around hosting and deploying the
app.

Things to include:
- Review app process and testing. Any caveats vs. staging and production?
- Any release scripts and how they work.
- How to monitor the deployment via addons and logs.
- Any troubleshooting tips related to current/past deployment issues.
- What is the SLA for service disruption resolution?
- Ways to run "smoke tests" after a deploy, if that makes sense.

## Additional Docs

You'll inevitably have more information to write down about all of the topics above.
For instance, detailing how you use a hosted search addon can be in its own documentation
article linked to the section where you first describe the "Services" used in the project.

Place these docs in a `/docs` section of your repo.

Examples could be:
- How user roles and authroization are managed.
- The backup schedule for databases.
- How users can edit content with a UI as well as API endpoints.


