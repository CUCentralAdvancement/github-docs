# Standards

This repo holds the standards used when creating and editing code in the CUCentralAdvancement GitHub 
Organization.

## TOC

table of contents...

## Frontend Apps

The frontend stack is built off of React, Theme UI, and node.js/TypeScript. Depending on whether server 
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

...

## Heroku Platform

...

## Salesforce

somehow..

## Legacy Apps

...