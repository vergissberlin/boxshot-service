const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger')

const config = {
	name: 'boxshot-service',
	port: process.env.PORT || 80,
	host: '0.0.0.0',
}

const app = express()
const logger = log({ console: true, file: false, label: config.name })

app.use(bodyParser.json())
app.use(cors())
app.use(ExpressAPILogMiddleware(logger, { request: true }))

app.get('/', (req, res) => {
	res.header(
		'Cache-Control',
		'max-age=600, s-max-age=600, public, must-revalidate'
	)
	res.json({ hello: 'world' })
})

app.listen(config.port, config.host, (e) => {
	if (e) {
		throw new Error('Internal Server Error')
	}
	logger.info(`${config.name} running on ${config.host}:${config.port}`)
})
