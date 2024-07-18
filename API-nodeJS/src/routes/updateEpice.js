const { Epice } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.put('/api/epices/:id', auth, (req, res) => {
		const id = req.params.id
		Epice.update(req.body, {
			where: { id: id }
		})
		.then(_ => {
			return Epice.findByPk(id).then(epice => {
				if (epice === null) {
					const message = `L'épice demandée n\'existe pas. Réessayez avec un autre identidiant.`
					return res.status(404).json({ message })
				}
				const message = `L'épice ${epice.name} a bien été modifiée.`
				res.json({message, data: epice })
			})
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = `L'épice n\'a pas pu être modifiée. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
