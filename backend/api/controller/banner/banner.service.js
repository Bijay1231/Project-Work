const mysql=require('../../module/database')
module.exports=({
    createBanner:(req,res)=>{
        mysql.query("INSERT INTO `banners` (`bannerName`, `bannerImgUrl`, `positionID`, `hyperLink`) values(?,?,?,?);",[req.body.bannerName,req.file.path,req.body.positionID,req.body.hyperLink],(err,data)=>{
            if(err){
                return res(err)
            }
            return res(null,data)
        })
    },
    getAllBanner:(req,res)=>{
        mysql.query(`select * from banners`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    },
    getBannerById:(req,res)=>{
        mysql.query(`select * from banners where id=?`,[req.params.id],(err,data)=>{
          if(err){
                return res(err)
            }
            else{
                return res(null,data[0])
            }
        })
    },  
        updateBanner: (req, res) => {
            mysql.query(`update banners set ?  where id=?`, [req.body, req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        },
        deleteBanner: (req, res) => {
            mysql.query(`delete from banners where id=?`, [req.params.id], (err, data) => {
                if (err) {
                    return res(err)
                }
                return res(null, data)
            })
        }  
})