# Standards

This repo holds the standards used when creating and editing code in the CUCentralAdvancement GitHub
Organization. The documentation is still in active development and will change structure, but all known stubs
have been created. As always, PR's are welcome!

## TOC

GitHub now includes ToC for all project readmes. Look ^^^ as you scroll.

## GitHub Administration

There are many facets of administering the GitHub Organization from creating and archiving projects to
managing user access.

- [Project Creation](docs/github/project-creation.md) - Most projects will consist of a pre-defined tech stack
  used across applications. You can find sample files to copy/paste to your new project.
- [Project Archiving](docs/github/project-archiving.md) - Some projects will have a definitive life-span,
  especially if they use "static site generation" and can be archived in a static manner.
- [User Management](docs/github/user-management.md) - There are several GitHub Teams in the
  CUCentralAdvancement organization. During employee onboarding/off-boarding, the Digital Engagement team is
  responsible for editing permissions and maintaining proper user access control across the organization.
- [Slack Integration](https://github.com/integrations/slack#configuration) - A `#github-activity`
  channel exists in Slack where most notifications go. You can `/github subcribe owner/repo thing` to add more
  or `/github unsubscribe` to remove notifications. More details can be found on the GitHub documentation
  page.
- [Secret Management](docs/github/secrets.md) - Each project will likely include configuration variables that
  should never be committed to code. While using GitHub's "secrets" functionality is pretty straight-forward,
  there are some caveats to know about.

## Development Philosophies and Workflows

Every great development team needs to share a coherent vision to build out the best applications possible.
Good architecture should be stamped and printed across hosted applications just like DNA serves as the
building block of life. We adapt our workflows and philosophies as time moves on, but here we will discuss the
DNA that sits at the core of every development decision, whether it be writing code or performing project
management work.

- [Simplicity](docs/dna/simplicity.md) - To get in the right mindset, you should first focus on the immediate
  task at hand. Developers tend to expand all problems put before them looking for scaling issues and
  potential bugs...but we don't need to think about those things first.
- [Theory of Constraints](docs/dna/constraints.md) - Building off of the KISS mantra, the theory of
  constraints meets you where you're at and is solely focused on increasing productivity without burdening you
  with arbitrary metrics to track.
- [Kanban Project Board](docs/dna/kanban.md) - Once you're oriented to a simpler mindset, the next step is
  taking an idea and moving it through a Kanban board that ends with deployment.
- [Gitflow](docs/dna/gitflow.md) - While working on the code, you'll need to use an effective branching
  strategy to handle multiple work in progress features.
- [Project Code Style](docs/dna/code-style.md) - With few hands to do the work, code review can be tricky, but
  with the addition of automation, it becomes easier.
- [Project Code Review](docs/dna/code-review.md) - With few hands to do the work, code review can be tricky,
  but with the addition of automation, it becomes easier.
- [Testing Philosophy](docs/dna/testing.md) - All projects should have tests written as development
  progresses, but people shouldn't waste time writing extraneous tests.
- Should add DDD principles?

## Frontend Apps And Concerns

The frontend stack is built off of React, Tailwind CSS, and node/TS. So far Next.js has handled the frontend
routing, tooling, and SSR/static compilation whether the app needs a server or not.

- [Using Tailwind For All Web-bssed Styling](docs/frontend/tailwind.md) - A collection of base components
  built using Theme UI and Storybook.
- [React and Complementary Libraries](docs/frontend/react.md) - Even if the app is rendered via Next.js or
  another, React-based framework the theme system, form validation, animation, etc. will still be the same.
- [Next.js](docs/frontend/nextjs.md) - Next.js allows for dynamic frontends that need to use logic at some
  part of the request process. Way easier to maintain than setting up a mess of serverless functions.
- [Other HTML/CSS/JS](docs/frontend/loose-ends.md) - There will be parts of the frontend not using React but
  those parts will still use the same design tokens to maintain branding consistency.
- [Cypress Testing](docs/frontend/cypress.md) - Cypress.io is the preferred way to write functional,
  end-to-end tests for all applications.

## Backend Apps And Concerns

The backend stack is built off of node/TS, Go, and potentially Elixir/Phoenix. Older applications use PHP, but
those applications are being moved to the new stack with an expected deprecation of PHP usage by Q3 of 2021.

- [Authetication Policies](docs/backend/authentication.md) - Applications built by DE developers use two
  different kinds of authentication strategies: Ping SSO and Auth0. Both are hosted services leaving no
  authentication within the individual applications themselves.
- [Authorization Policies](docs/backend/authorization.md) - Authorization is done within each application but
  follows a pattern of connecting authentication profiles to user application identities.
- [node/TS](docs/backend/node.md) - Express is still one of the most widely used web frameworks, and it is
  possible that using a node-based solution will make the most sense when making considerations for a new
  project, especially if there is already a framework that supports most of the needed features. Blitz and
  Redwood are promising in this regard for rapid application development, but Next.js + custom code is still
  the current winner in this category.
- [Go](docs/backend/go.md) - Simpler web projects can use Go...going forward. For instance, a one or two route
  API or a static file server are good candidates for a Go project. We are archiving some apps built with
  Next.js as static sites served via Fiber, or similar Go web framework, for better performance and resource
  management.
- [PHP](docs/backend/php.md) - Developers working on the current Advancement applications grew up using
  Drupal 7 and so there is one Drupal 7 app still in production. Drupal 9 is still planned to be utilized, 
  but it all depends on future discussions.

## Local Development

Each project will have a unique local development setup that will be detailed in the project's readme file,
but there are some things that are good to know across projects. Over time, this list will be filled in.

- You can use `lvh.me` for testing subdomains without needing vhosts or DNSmasq or anything like that. For
  example, `http://sub.lvh.me:3000` will handle the same request as `http://localhost:3000`.

## Heroku Platform

Heroku is the platform used to run frontend and backend applications. While Heroku allows for many languages
to be deployed on its infrastructure, we will only discuss deploying apps written in TS/JS, Elixir, Go, Ruby,
or PHP. There are also a few services that remain consistent across apps.

You can view the Heroku docs in their own repo: https://github.com/CUCentralAdvancement/heroku-docs

## Salesforce

Will be used somehow for online donations and donor management. The "NextGen" project controls development 
of Salesforce-related things, and the Digital Engagement/Marketing team has not been involved in the 
development as much as initially planned.

- [Automated Testing](docs/salesforce/automated-testing.md) - Still being thought out...but attempting to use
  Cypress. The final recommendation was to use https://www.testim.io/ but that never panned out.
- [Lightning Platform](docs/salesforce/lightning.md) - Still being thought out...likely no work within DE/M
- [VisualForce React Apps](docs/salesforce/vf-react.md) - Still being thought out...likely no work within DE/M
- [Mulesoft](docs/salesforce/mulesoft.md) - Still being thought out...likely no work within DE/M

## Legacy Apps

A few applications currently in production are scheduled to be 

- [Giving Site](docs/legacy/giving.md) - A Drupal 7 site hosted on Pantheon that is in the process of being
  deprecated. The site is the sole entry point for making online donations to the University of Colorado, 
  but it also serves some marketing functions as well as hosting CU Foundation content.
- [Essential CU](docs/legacy/essential-cu.md) - This has been moved to a Next.js project that will be archived
  as a static site. The "Essential CU" campaign might end soon enough, and therefore the content would 
  need to be hosted at a different place. Ideally, story content on this application will be aggregated 
  into a central place where users can easily navigate and find content.

## Apps Partially Developed

Several applications and ideas were partially developed and then abandoned for better solutions. Instead 
of deleting those pieces of documentation, they will be listed here for historical reference. 

- [Hasura Data Graph](docs/backend/hasura.md) - Written in Haskell but provides ways to run resolvers in
  arbitrary languages. Stores data via Postgres and makes traditional relational database operations easier to
  manage within GraphQL. At one point, the idea was to push all data through this graph, but work on 
  Heroku with microservices has stalled as of summer 2021.
- [Ruby on Rails](docs/backend/rails.md) - Ruby on Rails is the preeminent full-stack rapid application
  development framework used on Heroku dynos. The simplicity and pragmatism of the Rails community also fits
  in well to the scale and team size of Digital Engagement. Rails can be used to host frontend and backend
  code or serve as a backend to decoupled frontends. We spent a bit of time trying to migrate the giving.
  cu.edu website to RoR: https://github.com/CUCentralAdvancement/giving-backend 
- [Phoenix](docs/backend/phoenix.md) - Phoenix and Elixir are great fits for web applications that involve
  users who need dashboards and need to edit and update content. The real-time features in addition to
  LiveView make it easier to maintain these applications all in one place. Using Elixir for application
  development is still exploratory but will continue...until it does not. Like right now.
