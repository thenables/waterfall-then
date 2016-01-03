
# waterfall-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Sequentially resolve a series of promise-returning function, returning the previous function's values.

```js
const waterfall = require('waterfall-then')
const assert = require('assert')

const fn = waterfall([
  val => {
    assert.equal(val, 0)
    return Promise.resolve(1)
  },
  val => {
    assert.equal(val, 1)
    return Promise.resolve(2)
  },
  val => {
    assert.equal(val, 2)
    return Promise.resolve(3)
  }
])

fn(0).then(val => {
  assert.equal(val, 3)
})
```

[npm-image]: https://img.shields.io/npm/v/waterfall-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/waterfall-then
[travis-image]: https://img.shields.io/travis/jonathanong/waterfall-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/waterfall-then
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/waterfall-then/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/waterfall-then
[david-image]: http://img.shields.io/david/jonathanong/waterfall-then.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/waterfall-then
[license-image]: http://img.shields.io/npm/l/waterfall-then.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/waterfall-then.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/waterfall-then
