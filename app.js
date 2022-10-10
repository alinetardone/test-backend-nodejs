const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("./swagger.json")

const routes = require('./src/routes')

let app = express()

app.use(cors())
app.use(express.json({ limit: '100mb'}))
app.use(morgan('dev'))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

routes(app)

module.exports = app
