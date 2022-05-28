const {createBanner, getAllBanner, getBannerById,updateBanner,deleteBanner}=require('./banner.service')
module.exports=({
    createBanners:(req,res)=>{
    createBanner(req,(err,data)=>{
        console.log(data)
if(err){
    res.json({
        successs:0,
        msg:"Error while inserting "+err
    })
}
else{
res.json({
    success:1,
    result:data
})
}
    })
    },
    getAllBanners:(req,res)=>{
        getAllBanner(req,(err,data)=>{
            console.log(data)
    if(err){
        res.json({
            successs:0,
            msg:"Error while fetching "+err
        })
    }
    else{
    res.json({
        success:1,
        result:data
    })
    }
 })
},   
  getBannersById:(req,res)=>{
        getBannerById(req,(err,data)=>{
            console.log(data)
    if(err){
        res.json({
            successs:0,
            msg:"Error while fetching "+err
        })
    }
    else{
    res.json({
        success:1,
        result:data
    })
    }
 })
 },
 updateBanners: (req, res) => {
    updateBanner(req, (err, data) => {
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
deleteBanners: (req, res) => {
    deleteBanner(req, (err, data) => {
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