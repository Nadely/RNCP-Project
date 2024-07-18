const { Epice } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.get('/api/epices/:id', auth, (req, res) => {
		Epice.findByPk(req.params.id)
		.then(epice => {
			if(epice === null) {
				const message = `L'épice demandée n\'existe pas. Réessayez avec un autre identifiant.`
				return res.status(404).json({message})
			}
			const message = "Voici l'épice que vous avez choisi"
			res.json({ message, data: epice })
		})
		.catch(error => {
			const message = `L'épice que vous demandée n\'a pas pu être récupérée. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
