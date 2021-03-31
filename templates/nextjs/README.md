# Next.js Project Template

Each DE Next.js project starts based on the official starter: https://nextjs.org/docs/getting-started.

```bash
yarn create next-app
```

After the site installs, you should compare your local files with the following ones compiled from past and
current projects.

- [.babelrc](./.babelrc) - Used for `superjson` dependency and it would be nice to have root imports working vs. 
relative imports.
- [.eslintrc.js](./.eslintrc.js) - ESLint config that will differ based on whether TS or JS is primarily used in code. 
- [.gitignore](./.gitignore) - The Git ignore file should be similar across node-based projects.
- [.prettierrc.js](./.prettierrc.js) - Formats your code on save. Link to VS Code extension...
- [cypress.json](/templates/cypress.json) - Most every project will have Cypress testing set up and config.
- [LICENSE](/LICENSE) - The MIT License is used for all DE projects.
- [next-env.d.ts](./next-env.d.ts) - TS type declarations for the Next.js project.
- package.json - Scripts and dependencies. May contain Heroku knowledge. Look at actual project files.
- [postcss.config.js](./package.json) - How to add Tailwind to asset pipeline.
- [README.md](/templates/README) - Written in Markdown with common headings.
- [talwind.config.js](/templates/tailwind/tailwind.config.js) - Taiwlind CSS config.
- [tsconfig.json](./tsconfig.json) - TypeScript-specific config...I copy/pasted the hell out of this.

Those files may become outdated over time, and there should be some templating tool that keeps scaffold files up-to-date.