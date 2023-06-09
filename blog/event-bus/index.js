const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
  const event = req.body

  // TODO: add possible failure handlers.
  axios.post('http://localhost:4000/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  axios.post('http://localhost:4001/events', event)
    .catch((err) => {
      console.log(err.message);
    });
  axios.post('http://localhost:4002/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  res.send({ status: 'Ok' })
})

app.listen(4005, () => {
  console.log('Listening on 4005')
})