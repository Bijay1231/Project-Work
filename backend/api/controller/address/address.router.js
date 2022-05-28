const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createAddresses, getAddressesById,getAddressByusersId,getAllAddresses, updateAddresses, deleteAddresses } = require('./address.controller')
const auth = require('../../middleware/auth')

const upload = multer()

router.post('/', upload.none(),auth,createAddresses)

router.get('/', upload.none(),getAllAddresses)

router.get('/user/:userid',getAddressByusersId)

router.get('/:id',upload.none(),getAddressesById)

router.patch('/:id', upload.none(),auth,updateAddresses)

router.delete('/:id', upload.none(),auth,deleteAddresses)

module.exports = router