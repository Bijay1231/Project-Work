const mysql = require('../../module/database')
module.exports = ({
    checkMobile: (req, res, next) => {
        mysql.query("SELECT *  FROM `users` where `mobile`=? ", [req.body.mobile], (err, data) => {
            console.log(data)
            if (err) {
                console.log(err)
                res.json({
                    success: 0,
                    err: err
                })
            }
            if (data.length > 0) {
                return res.json({
                    success: 0,
                    msg: "Mobile number already registred"
                })
            }
            next();
        })
    }
})