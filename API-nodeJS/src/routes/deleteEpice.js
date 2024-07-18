const { Epice } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.delete('/api/epices/:id', auth, (req, res) => {
		Epice.findByPk(req.params.id).then(epice => {
			if(epice === null) {
				const message = `L'épice' demandée n'existe pas. Réessayez avec un autre identifiant.`
				return res.status(404).json({message})
			}
			const epiceDeleted = epice;
			return epice.destroy({
				where: { id: epice.id }
			})
			.then(_ => {
				const message = `L'épice avec l'identifiant n°${epiceDeleted.id} a bien été supprimée.`
				res.json({ message, data: epiceDeleted })
			})
		})
		.catch(error => {
			const message = `L'épice n'a pas pu être supprimée. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
