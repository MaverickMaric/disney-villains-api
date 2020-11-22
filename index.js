const express = require('express')
const villains = require('./villains')
const bodyParser = require('body-parser')

const app = express()

app.get('/villains', (request, response) => {
  return response.send(villains)
})

app.get('/villains/:slug', (request, response) => {
  const { slug } = request.params

  const foundVillain = villains.filter((villain) => villain.slug === slug)

  return foundVillain.length ? response.send(foundVillain) : response.status(404).send(`${slug} not found`)
})

app.post('/', bodyParser.json(), (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('The following fields are required: name, movie, slug')
  }

  const newVillain = { name, movie, slug }

  villains.push(newVillain)

  return response.status(201).send(newVillain)
})

app.listen(1312, () => {
  console.log('Listening on port 1312...') // eslint-disable-line no-console
})
