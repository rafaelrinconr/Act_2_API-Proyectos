const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
const etapa = require('./routes/etapa')
const universidad = require('./routes/universidad')


// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/clientes', cliente)
app.use('/api/etapas', etapa)
app.use('/api/universidades', universidad)

module.exports = app