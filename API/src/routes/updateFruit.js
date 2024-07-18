const { Fruit } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.put('/api/fruits/:id', auth, (req, res) => {
		const id = req.params.id
		Fruit.update(req.body, {
			where: { id: id }
		})
		.then(_ => {
			return Fruit.findByPk(id).then(fruit => {
				if (fruit === null) {
					const message = 'Le fruit demandé n\'existe pas. Réessayez avec un autre identidiant.'
					return res.status(404).json({ message })
				}
				const message = `Le fruit ${fruit.name} a bien été modifié.`
				res.json({message, data: fruit })
			})
		})
		.catch(error => {
			if(error instanceof ValidationError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			if(error instanceof UniqueConstraintError) {
				return res.status(400).json({ message: error.message, data: error})
			}
			const message = 'Le fruit n\'a pas pu être modifié. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
