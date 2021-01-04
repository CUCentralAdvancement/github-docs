# Standards

This repo holds the standards used when creating and editing code in the CUCentralAdvancement GitHub 
Organization.

## TOC

table of contents...

## GitHub Administration

There are many different facets of administering the GitHub Organization.

- [Project Creation](github/project-creation.md) - Most projects will consist of a pre-defined tech stack 
used across applications. You can find sample files to copy/paste to your new project.
- [Project Archival](github/project-archival.md) - Some projects will have a definitive life-span, especially
if they use "static site generation" and can be archived in a static manner.

## Frontend Apps

The frontend stack is built off of React, Theme UI, and node/TS. Depending on whether server 
functions are needed, Next.js or Gatsby handles the frontend routing, tooling, and SSR/static compilation.

- [Component Library and Design System](frontend/design-system.md) - A collection of base components built
  using Theme UI and served via Storybook.
- [React and Complementary Libraries](frontend/react.md) - Even if the app is rendered via Next.js or Gatsby, 
  the theme system, form validation, animation, etc. will still be the same.
- [Next.js](frontend/nextjs.md) - Next.js allows for dynamic frontends that need to use logic at some part of
  the request process. Way easier to maintain than setting up a mess of serverless functions.
- [Gatsby](frontend/gatsby.md) - Gatsby provides a nice platform for documentation and frontends that can
  be completely static.
- [Other HTML/CSS/JS](frontend/loose-ends.md) - There will be parts of the frontend not using React but
  those parts will still use the same design tokens to maintain branding consistency.
- [Cypress Testing](frontend/cypress.md) - Cypress.io is the preferred way to write functional, end-to-end
  tests for all applications.

## Backend Apps

The backend stack is built off of node/TS, Elixir/Phoenix, and Go. Older applications use PHP,
but those applications are being moved to the new stack with an expected deprecation of PHP usage by Q3 of 2021.

- [node/TS](backend/node.md) - Express is still one of the most widely used web frameworks, and it is possible
  that using a node-based solution will make the most sense when making considerations for a new project, especially
  if there is already a framework that supports most of the needed features. Blitz and Redwood are promising in this
  regard for rapid application development, but Phoenix is probably still better to build off of.
- [Phoenix](backend/phoenix.md) - Phoenix and Elixir are great fits for web applications that involve users who need
  dashboards and need to edit and update content. The real-time features in addition to LiveView make it easier to
  maintain these applications all in one place. 
- [Go](backend/go.md) - Simpler web projects can use Go...going forward. For instance, a one or two route API or a 
  static file server are good candidates for a Go project.
- [Legacy PHP](backend/php.md) - Developers working on the current Advancement applications grew up using Drupal 7
  and so there is one Drupal 7 app still in production. Drupal 9 was used for a CMS for a bit but the current needs
  aren't related to an enterprise CMS so Drupal 9 turned out to be overkill. No shade towards PHP or Drupal, but they
  aren't the right tools to use for this group. 

## Heroku Platform

Heroku is the platform used to run frontend and backend applications. While Heroku allows for many languages to be 
deployed on it's infrastructure, we will only discuss deploying apps written in TS, Elixir, Go, or PHP. There are
also a few services that remain consistent across apps.

- [Typical Project Lifecycle And Setup](platform/lifecycle.md) - Each app will have a typical way of setting up 
  environments and deploying code that involves review apps, release scripts, and the Herkou CLI.
- [Cloudinary as Media Service](platform/cloudinary.md) - Cloudinary makes handling media assets much simpler and 
  takes the burden off of maintaining media manipulations off of the application servers.  
- [S3 File Storage](platform/s3.md) - Heroku restarts the app dynos at least once every 24 hours, so any files not 
  stored in code or generated in the build slug will need to live on an external storage system. 
- [Algolia Search](platform/algolia.md) - Search is another PITA thing to maintain within an application server, 
  and Algolia amazingly allows for near instantaneous search as well as a complete UI for managing search rules.
- [Postgres Database](platform/postgres.md) - Any application needing a data store will use Postgres. Heroku has 
  invested heavily in building out tooling for Postgres databases and a lot of frameworks suggest using Postgres
  by default for a data store.
- [Redis](platform/redis.md) - ...not using this yet, but
- [Logging](platform/logging.md) - ...need much better background for this.
- [Performance Monitoring](platform/performance.md) - ...same here. Some services but also need application-level
  tools, like LiveDashboard for Phoenix projects.
- [Fastly](platform/fastly.md) - ...have to rethink using this and on which projects as it complicates adding
  tracking, logging, redirects, etc. and new languages/static sites might not need Varnish at all.
- [Auth0](platform/auth0.md) - Used for authentication...
- [Authorize.net](platform/authorize-net.md) - Used for payment transactions... 
    

## Salesforce

Will be used somehow...

- [Automated Testing](salesforce/automated-testing.md) - Still being thought out...
- [Lightning Platform](salesforce/lightning.md) - Still being thought out...
- [VisualForce React Apps](salesforce/vf-react.md) - Still being thought out...
- [Mulesoft](salesforce/mulesoft.md) - Still being thought out...

## Legacy Apps

Drupal 7 site on Pantheon.

- [Giving Site](legacy/giving.md) - ...
- [Essential CU](legacy/essential-cu.md) - ...

## Hasura Data Graph

Way into the future, but this will federate all data needed for frontend apps via GraphQL.

- [Hasura](backend/hasura.md) - ...
