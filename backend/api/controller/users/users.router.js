const express = require('express')
const router = express.Router()
const multer = require('multer')


const auth = require('../../middleware/auth')
const { createUsers,signupUsers,loginUsers, getAllUsers, getUsersByID, updateUsers, deleteUsers } = require('./users.controller')
const { checkMobile } = require('../../middleware/users/users.mobile_unique')

const storage = multer.diskStorage({
    destination: './upload/users_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/', upload.single('profilePicUrl'), checkMobile, createUsers)

router.post('/login', upload.none(), loginUsers)

router.post('/signup', upload.none(),checkMobile,signupUsers)

router.get('/', getAllUsers)

router.get('/:id',auth,getUsersByID)

router.patch('/:id',auth,upload.single('profilePicUrl'), updateUsers)

router.delete('/:id',auth,deleteUsers)

module.exports = router