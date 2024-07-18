const { Fruit } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.get('/api/fruits/:id', auth, (req, res) => {
		Fruit.findByPk(req.params.id)
		.then(fruit => {
			if(fruit === null) {
				const message = 'Le fruit demandé n\'existe pas. Réessayez avec un autre identifiant.'
				return res.status(404).json({message})
			}
			const message = 'Voici le fruit que vous avez choisi'
			res.json({ message, data: fruit })
		})
		.catch(error => {
			const message = `Le fruit que vous demandé n\'a pas pu être récupéré. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
