const express = require('express')
const router = express.Router()
const multer = require('multer');

const { createCategories, getAllCats, getSubCatsById, updateCats, deleteCats, getCatsById } = require('./category.controller')

const upload = multer()

router.post('/', upload.none(),createCategories);

router.get('/', getAllCats);

router.get('/getsub/:id', getSubCatsById)

router.get('/:id', getCatsById)

router.patch('/:id', upload.none(), updateCats)

router.delete('/:id', deleteCats)

module.exports = router;