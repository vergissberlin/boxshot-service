const Nightmare = require('nightmare');
const screenshotSelector = require('nightmare-screenshot-selector');
const fs = require('fs')
 
Nightmare.action('screenshotSelector', screenshotSelector)
 
var nightmare = Nightmare()
nightmare
        .goto('https://example.com/')
        .screenshotSelector('h1') // get the image in a buffer
        .then(function (data) {
          fs.writeFileSync('screen.png', data)
        })
        
nightmare
        .goto('https://example.com/')
        .screenshotSelector({selector: 'h1', path:'screen.png'}) // create directly a file
        .end()
