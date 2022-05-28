const express = require('express')
const router = express.Router()
const multer = require('multer')
const Razorpay = require("razorpay");


const auth = require('../../middleware/auth')
const { createOrders, getAllOrders, getOrdersById, updateOrders, deleteOrders } = require('./order.controller')

const upload = multer()

router.post('/', upload.none(),auth,createOrders)


router.get('/',auth,getAllOrders)

router.get('/:id',auth,getOrdersById)

router.patch('/:id', upload.none(),auth,updateOrders)

router.delete('/:id',auth,deleteOrders)

module.exports = router