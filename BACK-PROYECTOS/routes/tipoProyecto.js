const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto, updateTipoProyectoByID  } =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getTipoProyecto)

//actualizar
router.put('/:id', updateTipoProyectoByID)

module.exports = router;