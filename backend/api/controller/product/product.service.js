const mysql = require('../../module/database')
module.exports = ({
    createProduct: (req, res) => {
        console.log(req.body)
        mysql.query(`INSERT INTO products (catId, menuName, description,quantity,foodType, calories, protein, fat, carbohydrates, fibre, productImage, costPrice, regularPrice, sellPrice,tax_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [req.body.catId, req.body.menuName, req.body.description,req.body.quantity, req.body.foodType,req.body.calories, req.body.protein, req.body.fat, req.body.carbohydrates, req.body.fibre, req.file.path, req.body.costPrice, req.body.regularPrice, req.body.sellPrice,req.body.tax_id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAllProduct: (req, res) => {
        mysql.query(`Select * from products order by id desc`,[], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getProductById:(req, res) => {
        mysql.query(`select * from products where id = ? `, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },
        getFoodType:(req, res) => {
        mysql.query(`select * from products where foodType = ${req.params.foodType} `, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    updateProduct: (req, res) => {
        mysql.query(`
                            update products set ? where id = ? ;
                            `, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    deleteProduct: (req, res) => {
        mysql.query(`
                            delete from products where id = ? ;
                            `, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})