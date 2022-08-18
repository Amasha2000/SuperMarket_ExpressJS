const express = require('express')
const customer = require('./routes/customer')

const app = express()
const port = 4000

app.use(express.json())

app.use('/customer', customer)

app.get('/', (req, res) => {
  res.send('Request came from /route')
});

app.listen(port, () => {
  console.log(`JS app listening on port ${port}`)
});
