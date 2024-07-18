const { Fleur } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.put('/api/fleurs/:id', auth, (req, res) => {
		const id = req.params.id
		Fleur.update(req.body, {
			where: { id: id }
		})
		.then(_ => {
			return Fleur.findByPk(id).then(fleur => {
				if (fleur === null) {
					const message = 'La fleur demandée n\'existe pas. Réessayez avec un autre identidiant.'
					return res.status(404).json({ message })
				}
				const message = `La fleur ${fleur.name} a bien été modifiée.`
				res.json({message, data: fleur })
			})
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'La fleur n\'a pas pu être modifiée. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
