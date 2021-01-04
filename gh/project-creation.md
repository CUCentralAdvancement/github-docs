[<-- Home](/README.md)

# Project Creation

Follow these steps to create a new project in GitHub.

## Repository Creation

It is best to create the repository on GitHub first. Initialize it as a completely blank repository. You should default
the reposiroty to public unless there is a reason to make it private. You should also add "Dependabot Preview" as an app.

**TODO: Is dependabot needed as an "app" anymore?** 

![screenshot](/gh/project-creation.png)

Then, you will need to run a few ternimal commands. You should have Git installed to complete the steps.

```bash
# Go where you put code.
cd ~/Sites

# Find the remote URL in GitHub.
git clone git@github.com:CUCentralAdvancement/my-repo.git my-repo
cd my-repo
```

...

## Available Stacks

When beginning a project, you should first know what tech stack the project will use. If you can't 
find the stack you will use, please open an issue in this repository to add a new tech stack.

**Stacks:**
- [Next.js (TypeScript, React, Webpack, CU Component Library)](#next.js) - Used for creating frontends and 
user interfaces that need medium to advanced interactions, animations, and server-side code.
- [Fiber (Go)](#fiber) - Used for creating static frontend sites with little interaction, animations,
and server-side code.
- [micro-service-thing](#) - used for simple APIs and has no frontend.

## Next.js

You'll find all of the  Next.js in a `/templates/nextjs/` directory that has the following files:

```
.eslintrc.js
.gitignore
.prettierrc.js
cypress.json
LICENSE
next-env.d.ts
package.json
README.md
tsconfig.json
```

Please
