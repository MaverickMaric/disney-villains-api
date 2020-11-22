const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll({
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt', 'deletedAt']
    }
  })

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  const { slug } = request.params

  const foundVillain = await models.villains.findOne({
    where: { slug },
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt', 'deletedAt']
    }
  })

  return foundVillain ? response.send(foundVillain) : response.status(404).send(`${slug} not found`)
}


const saveNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('The following fields are required: name, movie, slug')
  }

  const [newVillain] = await models.villains.findOrCreate({ where: { slug }, defaults: { name, movie } })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }
