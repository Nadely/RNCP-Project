const { Fleur } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.post('/api/fleurs', auth, (req, res) => {
		Fleur.create(req.body)
		.then(fleur => {
			const message = `La fleur ${req.body.name} a bien été créée.`
			res.json({ message, data: fleur })
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'La fleur n\'a pas pu être ajouté. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
