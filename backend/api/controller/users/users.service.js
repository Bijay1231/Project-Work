const mysql = require('../../module/database')
module.exports = ({
    createUser: (req, res) => {
        mysql.query(`INSERT INTO users (name,ipaddress,incart,mobile,email,profilePicUrl, regTime, lastlogin,deviceType, password,secretKey, walletBalance, addressIDS, lastTokenTransactions) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [req.body.name, req.body.ipaddress, req.body.incart, req.body.mobile, req.body.email, req.file.path, req.body.regTime, req.body.lastlogin, req.body.deviceType, req.body.password, req.body.secretKey, req.body.walletBalance, req.body.addressIDS, req.body.lastTokenTransactions], (err, data) => {
            if (err) {
                console.log(err)
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
      signupUser: (req, res) => {
        mysql.query(`INSERT INTO users (name,mobile,password) VALUES (?,?,?);`, [req.body.name,req.body.mobile,req.body.password], (err, data) => {
            if (err) {
                console.log(err)
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    
    loginUser: (req, res) => {
        mysql.query(`select * from users where mobile=?;`, [req.body.mobile], (err, data) => {
            if (err) {
                return res(err);
            }
            return res(null, data[0])
        })
    },
    getAllUser: (res) => {
        mysql.query(`SELECT * FROM users ;`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },

    // get user by id 

    getUserByID: (req, res) => {
        mysql.query("select * from `users` where `id`=?", [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },

    updateUser: (req, res) => {
        mysql.query(`update users set ? where id = ?`, [
                req.body, req.params.id
            ],
            (error, data) => {
                if (error) {
                    return res(error);
                } else {
                    return res(null, data);
                }
            }
        );
    },
    deleteUser: (req, res) => {
        mysql.query(
            `delete from users where id = ? `, [req.params.id],
            (error, data) => {
                if (error) {
                    return res(error);
                }
                return res(null, data);
            }
        );
    },
})