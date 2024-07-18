const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

app
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'))
  .use(bodyParser.json())

sequelize.initDb()

// On placera nos futurs point de terminaison ici

//Légumes
require('./src/routes/findAllLegumes')(app)
require('./src/routes/findLegumeByPk')(app)
require('./src/routes/createLegume')(app)
require('./src/routes/updateLegume')(app)
require('./src/routes/deleteLegume')(app)

//Fruits
require('./src/routes/findAllFruits')(app)
require('./src/routes/findFruitByPk')(app)
require('./src/routes/createFruit')(app)
require('./src/routes/updateFruit')(app)
require('./src/routes/deleteFruit')(app)

//Epices
require('./src/routes/findAllEpices')(app)
require('./src/routes/findEpiceByPk')(app)
require('./src/routes/createEpice')(app)
require('./src/routes/updateEpice')(app)
require('./src/routes/deleteEpice')(app)

//Fleurs
require('./src/routes/findAllFleurs')(app)
require('./src/routes/findFleurByPk')(app)
require('./src/routes/createFleur')(app)
require('./src/routes/updateFleur')(app)
require('./src/routes/deleteFleur')(app)

//login
require('./src/routes/login')(app)

/* Dans notre terminal */
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
