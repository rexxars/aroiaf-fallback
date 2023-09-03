const os = require('os')
const express = require('express')
const {indexController} = require('./controller')

const app = express()

app.disable('x-powered-by')
app.enable('trust proxy')

app.use((req, res, next) => {
  res.set('x-served-by', os.hostname())
  next()
})

app.get('/', indexController)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send('Internal Server Error!')

  setImmediate(() => {
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  })
})

exports.app = app
