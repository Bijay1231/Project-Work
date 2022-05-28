const { createCategory, getAllCat, getSubCatById, updateCat, deleteCat, getCatById } = require('./category.service')

module.exports = ({
    createCategories(req, res) {
        console.log(req.body)
        createCategory(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error While inserting " + err
                });
            } else {
                res.json({
                    success: 1,
                    msg: "data inserted successfully",
                    result: data
                })
            }
        })
    },
    getAllCats: (req, res) => {
        getAllCat((err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching"
                })
                if (!data) {
                    res.json({
                        success: 0,
                        msg: "no records found"
                    })
                }
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getCatsById: (req, res) => {
        getCatById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching category " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    result: "no record found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getSubCatsById: (req, res) => {
        getSubCatById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by id " + err
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
    updateCats: (req, res) => {
        updateCat(req, (err, data) => {
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
    deleteCats: (req, res) => {
        deleteCat(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    message: "unable to delete" + err
                })
            } else {
                res.json({
                    success: 1,
                    msg: "records delete succesfully",
                    result: data
                })
            }
        })
    }
})