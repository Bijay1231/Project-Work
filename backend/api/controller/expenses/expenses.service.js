const mysql =require('../../module/database')
module.exports=({
    createExpense:(req,res)=>{
        mysql.query("INSERT INTO `expenses` (`supplierName`, `supplierAddress`, `supplierGST`, `products`, `date`, `total`, `tax`, `grandTotal`, `paymentMode`) VALUES (?,?,?,?,?,?,?,?,?);",[req.body.supplierName,req.body.supplierAddress,req.body.supplierGST,req.body.products,req.body.date,req.body.total,req.body.tax,req.body.grandTotal,req.body.paymentMode],(err,data)=>{
            if(err){
                return res(err)
            }
            return res(null,data)
        })
    },
    getAllExpense:(req,res)=>{
        mysql.query(`select * from expenses`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },
    getExpenseById:(req,res)=>{
        mysql.query(`select * from expenses where id=?`,[req.params.id],(err,data)=>{
          if(err){
                return res(err)
            }
            else{
                return res(null,data[0])
            }
        })
    },  
        updateExpense: (req, res) => {
            mysql.query(`update expenses set ?  where id=?`, [req.body, req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        },
        deleteExpense: (req, res) => {
            mysql.query(`delete from expenses where id=?`, [req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        }
})