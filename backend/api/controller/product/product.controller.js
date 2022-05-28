const { createProduct, getAllProduct, getProductById,getFoodType, updateProduct, deleteProduct } = require('./product.service')
module.exports = ({
    createProducts: (req, res) => {
        createProduct(req, (err, data) => {
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
    getAllProducts: (req, res) => {
        getAllProduct(req,(err, data) => {
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
    getProductsById: (req, res) => {
        getProductById(req, (err, data) => {
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
       getFoodTypes: (req, res) => {
        getFoodType(req, (err, data) => {
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
    updateProducts: (req, res) => {
        if(req.file){
            req.body.productImage = req.file.path;
        }
        updateProduct(req, (err, data) => {
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
    deleteProducts: (req, res) => {
        deleteProduct(req, (err, data) => {
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