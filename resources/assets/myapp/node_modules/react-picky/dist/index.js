
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-picky.cjs.production.min.js')
} else {
  module.exports = require('./react-picky.cjs.development.js')
}
