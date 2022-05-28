const express = require('express')
const { createCoupons, getAllCoupons,getCouponsById,updateCoupons,deleteCoupons } = require('./coupon.controller')
const router = express.Router()
const multer = require('multer')

const upload = multer()

router.post("/", upload.none(), createCoupons)
router.get("/", getAllCoupons)
router.get("/:id", getCouponsById)
router.patch("/:id",upload.none(), updateCoupons)
router.delete("/:id",deleteCoupons)

module.exports = router