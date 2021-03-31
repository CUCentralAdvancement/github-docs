[<-- Home](/readme.md)

# Using Tailwind CSS In Projects

Tailwind CSS is a utility-first C

Intro Resources:
- Tailwind Philosophy - https://tailwindcss.com/docs/utility-first
- Link to ADR...

## Installation

You most likely will be using frontend framework to install Tailwind in DE (Digital Engagement) projects.
There are specific instructions on how to add Tailwind to many different frameworks including Next.js.

### Next.js

Steps:
- https://tailwindcss.com/docs/guides/nextjs
- Also add Tailwind Forms, `yarn add @tailwindcss/forms`
- Copy template from [Tailwind config file](/templates/tailwind/tailwind.config.js)

After installing, you will have both `postcss.config.js` and `tailwind.config.js` in your root directory. You
do not need to edit the PostCSS config file, but you should place theme defaults in the Tailwind config file.
Please copy it from the link above, but for reference, it will look like this.

```js
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#CFB87C',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
```

### Ruby on Rails

Use a template to start all Rails-based projects. DE will have a custom template generator, but for
now, use the one from railsnew.io.

```
rails new my_app -d postgresql --skip-test --template https://www.railsbytes.com/script/Xo5s9m
```

## Usage

DE will have a component library with instructions on how to use Tailwind in different frameworks and
template languages. For now, DE devs use the Tailwind docs a lot and have only added custom colors to the
theme object.

In the future, components will have variants that describe the additional styling context, if any, the component
will use.

```jsx
// For Next.js/React
<Button variant="outline">Load more...</Button>
<Button variant="primary">Save Form</Button>
```

```ruby
// For Ruby/Rails
<%= render Global::Button.new(variant: 'ouline', text: 'Load more...') %>
<%= render Global::Button.new(variant: 'primary', text: 'Save Form') %>
```
