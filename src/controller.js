const os = require('os')

function buildHtml(req) {
  return `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>A Realm of Ice and Fire</title>
    <style>
    html, body { margin: 0; padding: 0; font-family: sans-serif; }
    main { max-width: 800px; margin: 0 auto; padding: 1rem; }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello, ${req.headers.host || 'yee unknown host'}!</h1>
      <p>I am ${os.hostname()} - delighted to meet you!</p>
    </main>
  </body>
  </html>`
}

exports.indexController = (req, res) => {
  res.type('html')
  res.send(buildHtml(req))
}
