const mysql = require('../../module/database')
module.exports = ({
    createOrder: (req, res) => {
        mysql.query(`INSERT INTO orders (userid, transactionNo, transactionStatus, orderDetails, orderStatus, couponsUsed, couponID, useSavedAddress, savedaddressID, customAddress, customPinCode, customCity, customState, customPhone, refund) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [req.body.userid, req.body.transactionNo, req.body.transactionStatus, req.body.orderDetails, req.body.orderStatus, req.body.couponsUsed, req.body.couponID, req.body.useSavedAddress, req.body.savedaddressID, req.body.customAddress, req.body.customPinCode, req.body.customCity, req.body.customState, req.body.customPhone, req.body.refund], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    getAllOrder: (req, res) => {
        mysql.query(`select * from orders limit 20`, [], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    getOrderById: (req, res) => {
        mysql.query(`select * from orders where orderid=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },
    updateOrder: (req, res) => {
        mysql.query(`update orders set ? where orderid=?;`, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    deleteOrder: (req, res) => {
        mysql.query(`delete from orders where orderid=?;`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})