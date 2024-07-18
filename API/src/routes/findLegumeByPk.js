const { Legume } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.get('/api/legumes/:id', auth, (req, res) => {
		Legume.findByPk(req.params.id)
		.then(legume => {
			if(legume === null) {
				const message = 'Le légume demandé n\'existe pas. Réessayez avec un autre identifiant.'
				return res.status(404).json({message})
			}
			const message = 'Voici le lègume que vous avez choisi'
			res.json({ message, data: legume })
		})
		.catch(error => {
			const message = `Le légume que vous demandé n\'a pas pu être récupéré. Réessayez dans quelques instants.`
			res.status(500).json({ message, data: error })
		})
	})
}
