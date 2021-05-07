[<-- Home](/readme.md)

# Testing Philosophy

Deciding on the what, when, and how to write tests can be difficult tasks for developer to 
undertake. Often times, writing tests is completely absent from the development process; 
however, with sensible rules for when and how to write tests, hopefully the DE 
(Digital Engagement) developers will release applications and features with proper test coverage.

## When

DE devs are not required to adhere to TDD (Test-driven Development) practices and write tests
before any code is written. However, if you expand your frame of reference to include 
documentation and AC (acceptance criteria) in the testing landscape, then DE devs perform some 
kind of test-driven development.

The issue spec and AC should be fully fleshed out by the time you start writing code. Many
projects develop a predictable cadence from issue creation to deployment and within that 
cadence lie interfaces and common services that multiple projects can utilize. The codebase
is mature enough that code can be specked out in the issue creation phase.

However, when a project is in the beginning stages, it can be nearly impossible to tie the 
AC to concrete code. At the unit level, the scope is too myopic for such nebulous AC. 
In these cases, working MVPs should be the goal.

Instead of specking out test code before you write application code, you can spec out a 
README file instead. Pretend like the project is launched. How will it function? The README
then becomes a stub for all other project documentation.

## What

There are two appropriate levels of tests to write:

- **Model tests** - You can think of these as "unit" tests, but the key here is to distinguish
  model tests from other kinds of unit tests. 
- **System tests** - These tests run the entire application code without using mocks, stubs, 
  spies, or any faked code. Many of these tests can fit into "Behavior-driven" development
  practices.
  
In any application DE devs write, there are "models" involved that would be called "Entities"
in the DDD (Domain-driven Design) realm. These models make us the base of the application
interacting with routers, controllers, and services as needed. Within the models, their
behavior should be unit testable. Controllers can dispatch work to be done, but all 
dependencies should be injected into the model to make unit testing easier.

Once you get to the integration layer and start interacting with services, you start needing
to "fake" other parts of the codebase, or else you aren't really performing unit testing. Why
stop at a stub, mock, or spy? Why learn all of those terms and argue about which one is best
to use. Instead, jump to the system level and test the whole thing. Tools like Cypress make
standardizing the process across projects easier.

# How

For **model tests**, you'll want to adopt the idiomatic practices for the unit test framework
of the language you're using. This will differ project-to-project.

For **system tests**, use Cypress for all cases. More information can be found in the general
"Testing Methods" documentation repo:
https://github.com/CUCentralAdvancement/testing-methods/blob/main/docs/training-cypress.md
