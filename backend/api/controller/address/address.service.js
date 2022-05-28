const mysql = require('../../module/database')
module.exports = ({
    createAddress: (req, res) => {
        mysql.query(`INSERT INTO address (userId, address, pincode, state, phoneNumber) VALUES (?,?,?,?,?);`, [req.body.userId, req.body.address, req.body.pincode, req.body.state, req.body.phoneNumber], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAllAddress: (res) => {
        mysql.query(`select * from address`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAddressById: (req, res) => {
        mysql.query(`select * from address where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },
      getAddressByuserId: (req, res) => {
        mysql.query(`select * from address where userId=?`, [req.body.userid], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    updateAddress: (req, res) => {
        mysql.query(`update address set ? where id=?;`, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    deleteAddress: (req, res) => {
        mysql.query(`delete from address where id=?;`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})