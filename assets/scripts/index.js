'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
//
// $(() => {
//   setAPIOrigin(location, config)
// })

$(() => {
  $("button[name='show-resume']").on('click', () => {
  $('.resume-imbed').css('display', 'block')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
