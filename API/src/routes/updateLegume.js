const { Legume } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.put('/api/legumes/:id', auth, (req, res) => {
		const id = req.params.id
		Legume.update(req.body, {
			where: { id: id }
		})
		.then(_ => {
			return Legume.findByPk(id).then(legume => {
				if (legume === null) {
					const message = 'Le légume demandé n\'existe pas. Réessayez avec un autre identidiant.'
					return res.status(404).json({ message })
				}
				const message = `Le légume ${legume.name} a bien été modifié.`
				res.json({message, data: legume })
			})
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'Le légume n\'a pas pu être modifié. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
