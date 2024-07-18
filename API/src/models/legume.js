/* L’API Rest et la Base de données : Créer un modèle Sequelize */
module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Legume', {
	  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	  },
	  name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: {
			msg : 'Le nom est déjà pris.'
		},
		validate: {
			notEmpty: { msg: 'Le nom du légume ne doit pas être vide.' },
			notNull: { msg: 'Le nom du légume est une propriété requise.' }
		}
	  },
	  prix: {
		type: DataTypes.FLOAT,
		allowNull: false,
		validate: {
			isFloat: { msg: 'Utilisez uniquement des nombres pour les prix.' },
			notNull: { msg: 'Les prix sont une propriété requise.' }
		}
	  },
	  description: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: { msg: 'La description du légume ne doit pas être vide.' },
			notNull: { msg: 'La description du légume est une propriété requise.' }
		}
	  }
	},
	{
	  timestamps: true,
	  createdAt: 'created',
	  updatedAt: false
	})
  }
