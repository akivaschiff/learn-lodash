#lodash

We love it. We use it all the time. Let's up our game by:

1) Learning to use more lodash functions
2) Making our coding style more similar and familiar to each other


Our current lodash convensions are:

- use `_.chain` if you're connecting more than 1 lodash call
- avoid `_.reduce` if there's a builtin that does what you need
- use type-safeable notations
(e.g. - prefer: `_.map(customers, c => c.customerId)`
instead of `_.map(customers, 'customerId')`)

### Getting started

Install dependencies:
`npm i`

Run the tests:
`npm test`

But oh no! All the tests fail!

Your objective: **MAKE ALL TESTS PASS**


Edit test files only. Nothing else.

Good luck :)
