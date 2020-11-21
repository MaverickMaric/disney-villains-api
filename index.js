const express = require('express')
const villains = require('./villains')

const app = express()

app.get('/villains', (request, response) => {
  return response.send(villains)
})

app.get('/villains/:slug', (request, response) => {
  const { slug } = request.params

  const foundVillain = villains.filter((villain) => villain.slug === slug)

  return response.send(foundVillain)
})


app.listen(1312, () => {
  console.log('Listening on port 1312...') // eslint-disable-line no-console
})
