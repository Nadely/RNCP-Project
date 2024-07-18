const { Fruit } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.delete('/api/fruits/:id', auth, (req, res) => {
		Fruit.findByPk(req.params.id).then(fruit => {
			if(fruit === null) {
				const message = 'Le fruit demandé n\'existe pas. Réessayez avec un autre identifiant'
				return res.status(404).json({message})
			}
			const fruitDeleted = fruit;
			fruit.destroy({
				where: { id: fruit.id }
			})
			.then(_ => {
				const message = `Le fruit avec l'identifiant n°${fruitDeleted.id} a bien été supprimé.`
				res.json({ message, data: fruitDeleted })
			})
		})
		.catch(error => {
			const message = 'Le fruit n\'a pas pu être supprimé. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
