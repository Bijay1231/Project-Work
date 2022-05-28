const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createDiets,getAllDiets,getDietsById,updateDiets,deleteDiets} = require('./diet.controller')

const upload = multer()

router.post('/', upload.none(), createDiets)

router.get('/',getAllDiets)

router.get('/:id', getDietsById)

router.patch('/:id',upload.none(),updateDiets)

router.delete('/:id',deleteDiets)

module.exports = router