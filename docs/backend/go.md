# Go(lang)

On the project's homepage, Go is described as:

> an open source programming language that makes it easy to build **simple**, **reliable**,
> and **efficient** software.

The DE (Digital Engagement) team loves those three emboldened words, and we'll go through a bit
about what they mean to us...and not necessarily what the quote's author meant.

- **simple** - Apps build with Go should be easily described in one or two sentences. If you need
  more words to describe the application, pick another item in the tech stacks list. Also, the apps
  should have few dependencies. If you need a lot of dependencies and features, then choose another
  tech stack.
- **reliable** - By keeping dependencies low, ensuring module declarations in a simple format, and
  little to no "magic", Go applications should be easier to maintain than other languages with more
  moving pieces.
- **efficient** - Go applications are know to be fast, build in mere seconds, and require very low
  memory footprints. On top of that, formatting standards are built-in to the language, and in other
  languages you can literally have 10 or more dependencies just related to linting and formatting
  code.

Concurrency is another strong suit of Go, and it's
also [one of the reasons the language was created in the first place](https://golang.org/doc/faq#Origins)
.

## Language and Standard Library

More will be filled in as application development with Go progresses, but for now, we'll list
articles to help you learn.

- [Main Go Docs](https://golang.org/doc/) - This is the best place to start and has tutorials to
  orient beginners.

## Frameworks

Go has a notorious saying "use the standard library" whenever someone asks: "what is the best web
development framework in Go?" Obviously, that is an elitist view, and many people argue you'll be
creating the same frameworks, except more crude and poorly, that already exist to make web
development easier.

We want to keep the apps written in go simple, reliable, and efficient and adding dependencies works
against all three of those goals. However, easy-to-use web frameworks in other languages can wax in
wane in popularity, so it is at least a good idea to keep track of what's going on in the web
development framework category.

Two frameworks stood out to me, but I'll include a third and why I don't think it is a good option
to consider.

- [Fiber](https://docs.gofiber.io/) - Very much like Express in node.js and a well-maintained GH
  account with activity and good issue queue flow. It doesn't fit together enough pieces to be
  called a RAD (rapid application development) framework, but what's there is solid.
- [Buffalo](https://gobuffalo.io/en/docs/overview/) - Very much like Rails in Ruby, although the GH
  account and issue flow are currently weak. It might be worth it to poke devs over there to see if
  they reply. I feel like there was more enthusiasm with this project in the past.
- [Gin](https://gin-gonic.com/docs/) - Gin is still the most popular web framework used in Go, and
  it seems very similar to Fiber. However, Fiber has a better feel to it...I can't really say why
  except "more polished" comes to mind. There are many open PRs, and I don't see any reason to
  explore this framework vs. Fiber and Buffalo.

## IDEs

Go has a page on this topic, but VS Code and Goland are the top two IDEs of choice:
https://golang.org/doc/editors
