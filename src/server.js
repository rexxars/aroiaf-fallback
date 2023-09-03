/* eslint-disable no-console */
const {app} = require('./index')

app.listen(3000, '0.0.0.0', () => {
  console.log('Server listening on port 3000!')
})
