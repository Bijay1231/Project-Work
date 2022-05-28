const mysql = require('../../module/database')
module.exports = ({
    createCoupon: (req, res) => {
        mysql.query("INSERT INTO `coupons` (`couponCode`, `expiryDate`, `numberOfTimesCanBeUsed`, `allowOnlyNewUser`,`title`,`desc`,`type`,`limit`,`amount`) VALUES (?,?,?,?,?,?,?,?,?);", [req.body.couponCode, req.body.expiryDate, req.body.numberOfTimesCanBeUsed, req.body.allowOnlyNewUser,req.body.title,req.body.desc,req.body.type,req.body.limit,req.body.amount], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAllCoupon:(req,res)=>{
        mysql.query(`select * from coupons`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },
    getCouponById:(req,res)=>{
    mysql.query(`select * from coupons where id=?`,[req.params.id],(err,data)=>{
      if(err){
            return res(err)
        }
        else{
            return res(null,data[0])
        }
    })
},
updateCoupon: (req, res) => {
            mysql.query(`update coupons set ? where id=?`, [req.body, req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        },
        deleteCoupon: (req, res) => {
        mysql.query(`delete from coupons where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }  
})
