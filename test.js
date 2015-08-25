'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.notOk(require('./'))
  t.ok(proxyquire('./', {
    'global/window': {
      navigator: {
        userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)'
      }
    }
  }))
  t.end()
})
