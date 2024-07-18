/* L’API Rest et la Base de données : Créer un modèle Sequelize */
const { Sequelize, DataTypes } = require('sequelize')
const LegumeModel = require('../models/legume')
const FruitModel = require('../models/fruit')
const EpiceModel = require('../models/epice')
const FleurModel = require('../models/fleur')
const UserModel = require('../models/user')
const legumes = require('./mock-legume')
const fruits = require('./mock-fruit')
const epices = require('./mock-epice')
const fleurs = require('./mock-fleur')
const bcrypt = require('bcrypt')

const sequelize = new Sequelize('Dans mon jardin', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const Legume = LegumeModel(sequelize, DataTypes)
const Fruit = FruitModel(sequelize, DataTypes)
const Epice = EpiceModel(sequelize, DataTypes)
const Fleur = FleurModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({force: true})
  .then(_ => {
    legumes.map(legume => {
      Legume.create({
        name: legume.name,
        prix: legume.prix,
        description: legume.description
      }).then(legume => console.log(legume.toJSON()))
      .catch(error => console.error("Erreur lors de la création du légume :", error));
    });

    fruits.map(fruit => {
      Fruit.create({
        name: fruit.name,
        prix: fruit.prix,
        description: fruit.description
      }).then(fruit => console.log(fruit.toJSON()))
      .catch(error => console.error("Erreur lors de la création du fruit :", error));
    });

    epices.map(epice => {
      Epice.create({
        name: epice.name,
        prix: epice.prix,
        description: epice.description
      }).then(epice => console.log(epice.toJSON()))
      .catch(error => console.error("Erreur lors de la création de l'épice :", error));
    });

    fleurs.map(fleur => {
      Fleur.create({
        name: fleur.name,
        prix: fleur.prix,
        description: fleur.description
      }).then(fleur => console.log(fleur.toJSON()))
      .catch(error => console.error("Erreur lors de la création de la fleur :", error));
    });

    bcrypt.hash('Enola2908', 10)
    .then(hash => User.create({
      username: 'Nadely',
      password: hash })
    )
    .then(user => console.log(user.toJSON()))

    console.log('La base de données a bien été initialisée !')
  })
}

module.exports = {
  initDb, Legume, Fruit, Epice, Fleur, User
}
