const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger')

const Nightmare = require('nightmare')
const screenshotSelector = require('nightmare-screenshot-selector')
const fs = require('fs')

const config = {
  name: 'boxshot-service',
  port: 80,
  host: '0.0.0.0',
}

const app = express()
const logger = log({ console: true, file: false, label: config.name })

app.use(bodyParser.json())
app.use(cors())
app.use(ExpressAPILogMiddleware(logger, { request: true }))

app.get('/', (req, res) => {
  Nightmare.action('screenshotSelector', screenshotSelector)

  var nightmare = Nightmare()
  nightmare
    .goto('https://www.netresearch.de/')
    .screenshotSelector('h1') // get the image in a buffer
    .then(function (data) {
      fs.writeFileSync('shots/screen.png', data)
      res.status(200).send('Screenshot has been created.')
    })
})

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error')
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`)
})
