const { Fleur } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.delete('/api/fleurs/:id', auth, (req, res) => {
		Fleur.findByPk(req.params.id).then(fleur => {
			if(fleur === null) {
				const message = 'La fleur demandée n\'existe pas. Réessayez avec un autre identifiant'
				return res.status(404).json({message})
			}
			const fleurDeleted = fleur;
			fleur.destroy({
				where: { id: fleur.id }
			})
			.then(_ => {
				const message = `La fleur avec l'identifiant n°${fleurDeleted.id} a bien été supprimée.`
				res.json({ message, data: fleurDeleted })
			})
		})
		.catch(error => {
			const message = 'La fleur n\'a pas pu être supprimée. Réessayez dans quelques instants.'
			res.status(500).json({ message, data: error })
		})
	})
}
