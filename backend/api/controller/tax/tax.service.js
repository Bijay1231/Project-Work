const mysql=require('../../module/database')
module.exports=({
    createTax:(req,res)=>{
        mysql.query("INSERT INTO `taxes` (`taxName`, `taxPercent`) VALUES (?,?);",[req.body.taxName,req.body.taxPercent],(err,data)=>{
            if(err){
                return res(err)
            }
            return res(null,data)
        })
    },
    getAllTax:(req,res)=>{
        mysql.query(`select * from taxes`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },
    getTaxById:(req,res)=>{
        mysql.query(`select * from taxes where id=?`,[req.params.id],(err,data)=>{
          if(err){
                return res(err)
            }
            else{
                return res(null,data[0])
            }
        })
    },
        getMultiTax:(req,res)=>{
        mysql.query(`SELECT * FROM taxes where id in(`+req.params.id+`)`,[],(err,data)=>{
          if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },  
        updateTax: (req, res) => {
            mysql.query(`update taxes set ?  where id=?`, [req.body, req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        },
        deleteTax: (req, res) => {
            mysql.query(`delete from taxes where id=?`, [req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        }  
})