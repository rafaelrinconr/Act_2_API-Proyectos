const Etapa = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapaDB = await Etapa.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(etapaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapa = new Etapa(data)
        console.log(etapa)
        await etapa.save()
        return res.status(201).json(etapa)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//consultar
const getEtapa = async (req = request, 
    res = response) => {
        try{
            const etapaDB = await Etapa.find()//select * from tipoEquipo where estado=?
            return res.json(etapaDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

//actualizar
const updateEtapaByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapa)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEtapa, 
    getEtapa, 
    updateEtapaByID
}