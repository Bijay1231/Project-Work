const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createStaffs,loginStaffs,updateStaffs,getStaffsByID,getAllStaffs,deleteStaffs} = require('./staff.controller')

// middleware
const {fileUploadValidation}=require('../../../api/middleware/staff/staffValidation')
const {checkUID}=require('../../middleware/staff/checkUnique')

// const { checkMobile } = require('../../middleware/users/users.mobile_unique')
const storage = multer.diskStorage({
    destination: './upload/staff',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/', upload.fields([{name:"profilePhotoUrl",maxCount:1},{name:"KYCpdfURL",maxCount:1}]),checkUID,fileUploadValidation ,createStaffs)

router.post('/login', upload.none(), loginStaffs)

router.get('/', getAllStaffs)

router.get('/:id', getStaffsByID)

router.patch('/:id',upload.fields([{name:"profilePhotoUrl",maxCount:1},{name:"KYCpdfURL",maxCount:1}]),fileUploadValidation,updateStaffs)

router.delete('/:id', deleteStaffs)

module.exports = router