const { Fruit } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.post('/api/fruits', auth, (req, res) => {
		Fruit.create(req.body)
		.then(fruit => {
			const message = `Le fruit ${req.body.name} a bien été crée.`
			res.json({ message, data: fruit })
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'Le fruit n\'a pas pu être ajouté. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
