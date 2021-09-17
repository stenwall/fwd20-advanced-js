const express = require('express')
const app = express()
const port = 3000

// app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cat', (req, res) => {
  res.send('Hello Cat!')
})

// respond to POST request on the root route (/)
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// respond to a PUT request to the /user route
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

// respond to a DELETE request to the /user route
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`)
})