# Standards

This repo holds the standards used when creating and editing code in the CUCentralAdvancement GitHub 
Organization.

## TOC

table of contents...

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

...

## Salesforce

somehow..

## Legacy Apps

...