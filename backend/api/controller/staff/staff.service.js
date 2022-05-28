const mysql =require('../../module/database')
module.exports=({
    createStaff:(req,res)=>{
        mysql.query("INSERT INTO `staff` (`staffName`, `staffType`, `username`,`mobile`, `password`, `profilePhotoUrl`, `activeStatus`, `walletBalance`, `kycStatus`, `lastTransactions`, `bankAccNumber`, `bankIFSC`, `bankAccName`, `lastWithdrawals`, `panNumber`, `uidaiNumber`, `KYCpdfURL`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.staffName,req.body.staffType,req.body.username,req.body.mobile,req.body.password,req.files.profilePhotoUrl[0].path,req.body.activeStatus,req.   body.walletBalance,req.body.kycStatus,req.body.lastTransactions,req.body.bankAccNumber,req.body.bankIFSC,req.body.bankAccName,req.body.lastWithdrawals,req.body.panNumber,req.body.uidaiNumber,req.files.KYCpdfURL[0].path],(err,data)=>{
            if(err){
                return res(err)
            }
            return res(null,data)
        })
    },
    loginStaff: (req, res) => {
        mysql.query(`select * from staff where mobile=?;`,[req.body.mobile], (err, data) => {
            if (err) {
                return res(err);
            }
            return res(null, data[0])
        })
    },
    getAllStaff:(req,res)=>{
        mysql.query(`select * from staff`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },
    getStaffById:(req,res)=>{
        mysql.query(`select * from staff where id=?`,[req.params.id],(err,data)=>{
          if(err){
                return res(err)
            }
            else{
                return res(null,data[0])
            }
        })
    },  
        updateStaff: (req, res) => {
            mysql.query(`update staff set ?  where id=?`, [req.body, req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        },
        deleteStaff: (req, res) => {
            mysql.query(`delete from staff where id=?`, [req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        }
})