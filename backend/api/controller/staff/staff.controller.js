const { getAllStaff, getStaffById, updateStaff, deleteStaff, loginStaff,createStaff } = require('./staff.service')
const { hashSync, compareSync } = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = ({
    createStaffs: (req, res) => {
        if (req.body.password == req.body.cpassword) {
            req.body.password = hashSync(req.body.password, 10)
            createStaff(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "successfully regestred"
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "password did't match"
            })
        }
    },
    loginStaffs: (req, res) => {
        loginStaff(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while login " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "you have not regestred yet"
                })
            } else {
                var result = compareSync(req.body.password, data.password)
                if (result) {
                    var token = jwt.sign({
                        email: data.username,
                        mobile: data.mobile
                    }, 'mySecretKey', {
                        expiresIn: '24h'
                    })
                    res.json({
                        success: 0,
                        msg: "you are loggedin",
                        token: token
                    })
                } else {
                    res.json({
                        success: 0,
                        msg: 'invalid credentials'
                    })
                }
            }
        })
    },
    getAllStaffs: (req, res) => {
        getAllStaff(req,(err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: 'error while fetching'
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no result found"
                })
            } else {
                return res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    // get user by id 

    getStaffsByID: (req, res) => {
        getStaffById(req, (err, data) => {
            if (err) {
                console.log(err)
                return res.json({
                    success: 0,
                    msg: 'error while fetching user by id',
                    err: err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: 'no records found'
                })
            } else {
                res.json({
                    success: 1,
                    results: data
                })
            }
        })
    },
    updateStaffs: (req, res) => {
        if (req.files.profilePhotoUrl[0]) {
            req.body.profilePhotoUrl = req.files.profilePhotoUrl[0].path;
        }
        if (req.files.KYCpdfURL[0]){
            req.body.KYCpdfURL = req.files.KYCpdfURL[0].path;
        }
        updateStaff(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "err while update " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no result found"
                })
            } else {
                res.json({
                    success: 1,
                    message: "updated successfully",
                    result: data
                });
            }
        })
    },
    deleteStaffs: (req, res) => {
        deleteStaff(req, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (!data) {
                res.json({
                    success: 0,
                    message: "Record Not Found"
                });
            } else {
                return res.json({
                    success: 1,
                    message: "user deleted successfully"
                });
            }
        });
    }
})