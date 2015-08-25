'use strict'

var navigator = require('global/window').navigator

module.exports = (function isIE (userAgent) {
  return /MSIE/.test(userAgent)
})(navigator ? navigator.userAgent : '')
