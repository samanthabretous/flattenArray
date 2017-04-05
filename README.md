## The Challenge
The challenge is to write a function that accepts an arbitrarily-deep nested Array-like structure and returns a flattened structure with any null values removed. Include documentation about how to run your code and how your solution works, especially any cases in which it might fail and tradeoffs. Please include a few test cases. Feel free to implement the challenge using whatever programming language you're most comfortable with.

As an example, in JavaScript, your function may look something like this:

```
function flatten(arr) {
  // Implement me!
}

flatten([0, 2, [[2, 3], 8, 100, null, [[null]]], -2]);
// [0, 2, 2, 3, 8, 100, -2]
```

### How to run test
  1. `yarn add`

  If you don't have [yarn](https://yarnpkg.com/en/docs/install) then you can use `npm install` instead to install the testing packages.

  2. `yarn test` or `npm test`
