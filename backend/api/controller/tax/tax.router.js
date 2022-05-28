const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createTaxs,getAllTaxs,getTaxsById,getMultiTaxs,updateTaxs,deleteTaxs} = require('./tax.controller')

const upload = multer()

router.post('/', upload.none(), createTaxs)

router.get('/',getAllTaxs)

router.get('/:id', getTaxsById)

router.get('/multi/:id', getMultiTaxs)

router.patch('/:id',upload.none(),updateTaxs)

router.delete('/:id',deleteTaxs)


module.exports = router