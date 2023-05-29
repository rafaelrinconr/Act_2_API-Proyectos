const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: Number,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido']
    },
    fechaIniciacion: {
        type: String,
        required: [true, 'Fecha de inicio requerido']
    },
    fechaEntrega: {
        type: String,
        required: [true, 'Fecha de entrega requerido']
    },
    valor:{
        type:Number,
        required: [true, 'Valor requerido'],
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Proyecto', ProyectoSchema)
