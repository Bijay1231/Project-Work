const { createAddress, getAllAddress, getAddressById, getAddressByuserId,deleteAddress, updateAddress } = require('./address.service')
module.exports = ({
    createAddresses: (req, res) => {
        createAddress(req, (err, data) => {
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
    getAllAddresses: (req, res) => {
        getAllAddress((err, data) => {
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
    getAddressByusersId:(req, res) => {
        getAddressByuserId(req,(err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            }   if (!data) {
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
    getAddressesById: (req, res) => {
        getAddressById(req, (err, data) => {
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
    updateAddresses: (req, res) => {
        updateAddress(req, (err, data) => {
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
    deleteAddresses: (req, res) => {
        deleteAddress(req, (err, data) => {
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