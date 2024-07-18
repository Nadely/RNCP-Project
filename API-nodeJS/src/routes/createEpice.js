const { Epice } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.post('/api/epices', auth, (req, res) => {
		Epice.create(req.body)
		.then(epice => {
			const message = `L'épice ${req.body.name} a bien été crée.`
			res.json({ message, data: epice })
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = `L'épice' n\'a pas pu être ajouté. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
