const { Fleur } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.get('/api/fleurs/:id', auth, (req, res) => {
		Fleur.findByPk(req.params.id)
		.then(fleur => {
			if(fleur === null) {
				const message = 'La fleur demandée n\'existe pas. Réessayez avec un autre identifiant.'
				return res.status(404).json({message})
			}
			const message = "Voici la fleur que vous avez choisi"
			res.json({ message, data: fleur })
		})
		.catch(error => {
			const message = `La fleur que vous demandée n\'a pas pu être récupérée. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
