const { Router } = require('express')
const { createEtapa, getEtapa, updateEtapaByID  } =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

router.put('/:id', updateEtapaByID)

module.exports = router;