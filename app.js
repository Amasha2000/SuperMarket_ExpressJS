const express = require('express')
const customer = require('./routes/customer')
const item = require('./routes/item')
const order = require('./routes/order')

const app = express()
const port = 3000

app.use(express.json())

app.use('/customer', customer)
app.use('/item', item)
app.use('/order', order)

app.get('/', (req, res) => {
  res.send('Request came from /route')
});

app.listen(port, () => {
  console.log(`JS app listening on port ${port}`)
});
