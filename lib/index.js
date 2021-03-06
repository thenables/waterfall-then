'use strict'

const flatten = require('lodash/flattenDeep')
const Promise = require('any-promise')

module.exports = (_arr) => {
  if (typeof _arr === 'function') _arr = [_arr]
  if (!Array.isArray(_arr)) throw new TypeError('Input must be a function or an array.')
  // assumes that it always creates a new instances
  _arr = flatten(_arr)
  _arr.forEach((val) => {
    if (typeof val !== 'function') throw new TypeError('Input must only consist of functions')
  })

  return function (initialValue) {
    const context = this
    const arr = _arr.slice()
    return next(initialValue)
    function next (val) {
      if (!arr.length) return Promise.resolve(val)
      const fn = arr.shift()
      if (typeof fn !== 'function') return Promise.reject(new TypeError('Array must only consist of functions!'))
      try {
        return Promise.resolve(fn.call(context, val)).then(next)
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
