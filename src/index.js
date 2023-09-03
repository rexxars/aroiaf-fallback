const os = require('os')
const express = require('express')

const app = express()

app.disable('x-powered-by')
app.enable('trust proxy')

app.use((req, res, next) => {
  res.set('x-served-by', os.hostname())
  next()
})

app.get('/', (req, res) => {
  res.html('<!doctype html><html><body><h1>Hello World!</h1></body></html>')
})

exports.app = app
