# ayrayray
For walking through data structures where each value is wrapped in an array.

```js
const assert = require ('assert');
const A = require ('..');

const t = { foo: [{ bar: [{ baz: [1] }]
                  , quux: []
                  }]
          };

// Fetches the value from the specified path
assert.equal (1, A.step (['foo', 'bar', 'baz']) (t));

// Returns null for nonexistant keys
assert.equal (null, A.step (['flub']) (t));

// Returns null for empty values
assert.equal (null, A.step (['foo', 'quux']) (t));
```
