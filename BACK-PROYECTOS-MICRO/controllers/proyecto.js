const Proyecto = require('../models/proyecto')
const { request, response} = require('express')
const Cliente = require('../models/cliente')
const Etapa = require('../models/etapa')
const TipoProyecto = require('../models/tipoProyecto')
const Universidad = require('../models/universidad')


// crear
const createProyecto= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { cliente, etapa, tipoProyecto, universidad } = data;
        //validando cliente
        const clienteDB = Cliente.findOne({
            _id: cliente._id,
            estado: true
        })// select * from usuarios where _id=? and estado=true
        if(!clienteDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }
        // validando etapa
        const etapaDB = Etapa.findOne({
            _id: etapa._id,
            estado: true
        })// select * from marcas where _id=? and estado=true
        if(!etapaDB){
            return res.status(400).json({msg: 'etapa invalida'})
        }
        // validando tipo proyecto
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id,
            estado: true
        })// select * from estados where _id=? and estado=true
        if(!tipoProyectoDB){
           return res.status(400).json({msg: 'tipo proyecto invalido'})
        }
        // validando tipo universidad
        const universidadDB = Universidad.findOne({
            _id: universidad._id,
            estado: true
        })// select * from tipoequipos where _id=? and estado=true
        if(!universidadDB){
           return res.status(400).json({msg: 'universidad invalido'})
        }      
        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}


//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            console.log('peticion...')
            const proyectosDB = await Proyecto.find()//select * from proyectos
                .populate({
                    path: 'tipoProyecto',
                })
                .populate({
                    path: 'cliente',
                })
                .populate({
                    path: 'universidad',
                })
                .populate({
                    path: 'etapa',
                })
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar inventario
const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { createProyecto, getProyectos, updateProyectoByID }