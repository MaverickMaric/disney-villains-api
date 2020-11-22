const villains = (connection, Sequelize) => {
  return connection.define('villains', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.VARCHAR(255) },
    slug: { type: Sequelize.VARCHAR(255) },
  }, { paranoid: true })
}

module.exports = villains
