const { Epice } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
	app.get('/api/epices/', auth, (req, res) => {
		/* Requête de recherche par nom */
		if(req.query.name) {
			const name = req.query.name
			const limit = parseInt(req.query.limit) || 5

			if (name.lenght < 2) {
				const message = `le terme de recherche doit contenir au moins 2 caractères.`
				return res.status(400).json({ message })
			}

			return Epice.findAndCountAll({
				where: {
					name: { // propriété du modèle
						[Op.like]: `%${name}%` // critère de recherche
					}
				},
				order: ['name'],
				limit: limit
			})
			.then(({count, rows}) => {
				const message = `Il y a ${count} épice(s) qui correspondent au terme de la recherche ${name}.`
				res.json({ message, data: rows })
			})
		}

		/* Requête pour avoir la liste */
		else {
			Epice.findAll()
			.then(epices => {
			const message = 'Voici la liste des épices'
			res.json({ message, data: epices })
			})
			.catch(error => {
				const message = `La liste des épices n'a pas pu être récupérée. Réessayez dans quelques instants.`
				res.status(500).json({ message, data: error })
			})
		}
	})
}
