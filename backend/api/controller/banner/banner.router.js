const express=require('express')
const router=express.Router()
const multer=require('multer')

const {createBanners, getAllBanners, getBannersById, updateBanners, deleteBanners}=require('./banner.controller')

const storage = multer.diskStorage({
    destination: './upload/banner_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/',upload.single('bannerImgUrl'),createBanners)
router.get('/',getAllBanners)
router.get('/:id',getBannersById)
router.patch('/:id',upload.single('bannerImgUrl'),updateBanners)
router.delete('/:id',deleteBanners)


module.exports=router