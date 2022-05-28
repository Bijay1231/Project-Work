const mysql = require("../../module/database");
module.exports=({
createDiet:(req,res)=>{
    mysql.query("INSERT INTO `dietitiansession` (`transactionID`, `numberOfTokenUsed`, `tokenChargeFrom`, `tokenReceivedTo`, `textFrom`, `textTo`, `textMSG`, `seen`) VALUES (?,?,?,?,?,?,?,?);",[req.body.transactionID,req.body.numberOfTokenUsed,req.body.tokenChargeFrom,req.body.tokenReceivedTo,req.body.textFrom,req.body.textTo,req.body.textMSG,req.body.seen],(err,data)=>{
        if(err){
            return res(err)
        }
        return res (null,data)
    })
},
getAllDiet:(req,res)=>{
    mysql.query(`select * from dietitiansession`,[],(err,data)=>{
        if(err){
            return res(err)
        }
        else{
            return res(null,data)
        }
    })
},
getDietById:(req,res)=>{
    mysql.query(`select * from dietitiansession where id=?`,[req.params.id],(err,data)=>{
      if(err){
            return res(err)
        }
        else{
            return res(null,data[0])
        }
    })
},  
    updateDiet: (req, res) => {
        mysql.query(`update dietitiansession set ? where id=?;`, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    deleteDiet: (req, res) => {
        mysql.query(`delete from dietitiansession where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }  
})