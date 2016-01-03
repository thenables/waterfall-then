'use strict'

const assert = require('assert')

const waterfall = require('..')

describe('Sequential Then', () => {
  it('should execute all the promises sequentially', () => {
    return waterfall([
      val => {
        return wait(1).then(() => {
          assert(!val)
          return 1
        })
      },
      val => {
        wait(1).then(() => {
          assert.equal(val, 1)
          return 2
        })
      },
      val => {
        wait(1).then(() => {
          assert.equal(val, 2)
          return 3
        })
      },
    ])
  })

  it('should handle synchronous errors', () => {
    return waterfall([
      () => {
        throw new Error('yay')
      }
    ]).then(() => {
      throw new Error('boom')
    }).catch(err => {
      assert.equal(err.message, 'yay')
    })
  })

  it('should throw if a function is not passed', () => {
    return waterfall([
      true
    ]).then(() => {
      throw new Error('boom')
    }).catch(err => {
      assert(err.message !== 'boom')
    })
  })
})

function wait (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
