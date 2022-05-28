const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createProducts, getAllProducts, getProductsById, getFoodTypes,updateProducts, deleteProducts } = require('./product.controller')

const storage = multer.diskStorage({
    destination: './upload/product_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('productImage')

router.post('/', upload, createProducts);

router.get('/', getAllProducts)

router.get('/:id', getProductsById)

router.get('/type/:foodType', getFoodTypes)

router.patch('/:id', upload, updateProducts)

router.delete('/:id', deleteProducts)

module.exports = router;