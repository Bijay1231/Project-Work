const mysql = require('../../module/database')
module.exports=({
    checkUID: (req, res, next) => {
    uid = req.body.uidaiNumber
    mysql.query("SELECT * FROM `staff` where `uidaiNumber`=?", [uid], (err, data) => {
        console.log(data)
        if (err) {
            console.log(err)
        }
        if (data.length > 0) {
            return res.json({
                success: 0,
                msg: "uniqueID already registred"
            })
        }
        next();
    })
}
})