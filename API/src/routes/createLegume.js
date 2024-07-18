const { Legume } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.post('/api/legumes', auth, (req, res) => {
		Legume.create(req.body)
		.then(legume => {
			const message = `Le légume ${req.body.name} a bien été crée.`
			res.json({ message, data: legume })
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'Le légume n\'a pas pu être ajouté. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
