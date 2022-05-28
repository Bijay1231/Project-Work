const { createCoupon,getAllCoupon,getCouponById,updateCoupon,deleteCoupon } = require('./coupon.service')
module.exports = ({
    createCoupons: (req, res) => {
        console.log(req.body)
        createCoupon(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while inserting " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getAllCoupons: (req, res) => {
        console.log(req.body)
        getAllCoupon(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching" + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
     getCouponsById:(req,res)=>{
        getCouponById(req,(err,data)=>{
            console.log(data)
    if(err){
        res.json({
            successs:0,
            msg:"Error while fetching "+err
        })
    }
    else{
    res.json({
        success:1,
        result:data
    })
    }
 })
 },
 updateCoupons: (req, res) => {
    updateCoupon(req, (err, data) => {
        if (err) {
            res.json({
                success: 0,
                message: "error while doing update " + err
            })
        } else {
            res.json({
                success: 1,
                result: data
            })
        }
    })
},
deleteCoupons: (req, res) => {
        deleteCoupon(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "unable to delete " + err
                })
            } else {
                res.json({
                    success: 1,
                    msg: "successfully deleted"
                })
            }
        })
    }
})