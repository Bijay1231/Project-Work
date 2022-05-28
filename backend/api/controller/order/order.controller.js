const { createOrder, getAllOrder, getOrderById, updateOrder, deleteOrder } = require('./order.service')
module.exports = ({
    createOrders: (req, res) => {
        console.log(req.body)
        createOrder(req, (err, data) => {
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
    getAllOrders: (req, res) => {
        getAllOrder(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getOrdersById: (req, res) => {
        getOrderById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching by id " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no records found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    updateOrders: (req, res) => {
        updateOrder(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while updateing " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    deleteOrders: (req, res) => {
        deleteOrder(req, (err, data) => {
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