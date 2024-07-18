const { Legume } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.delete('/api/legumes/:id', auth, (req, res) => {
		Legume.findByPk(req.params.id).then(legume => {
			if(legume === null) {
				const message = 'Le légume demandé n\'existe pas. Réessayez avec un autre identifiant'
				return res.status(404).json({message})
			}
			const legumeDeleted = legume;
			legume.destroy({
				where: { id: legume.id }
			})
			.then(_ => {
				const message = `Le légume avec l'identifiant n°${legumeDeleted.id} a bien été supprimé.`
				res.json({ message, data: legumeDeleted })
			})
		})
		.catch(error => {
			const message = 'Le légume n\'a pas pu être supprimé, Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
