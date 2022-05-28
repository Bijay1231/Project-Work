const {createDiet,getAllDiet,getDietById,updateDiet,deleteDiet}=require('./diet.service')
module.exports=({
    createDiets:(req,res)=>{
    createDiet(req,(err,data)=>{
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
    getAllDiets:(req,res)=>{
        getAllDiet(req,(err,data)=>{
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
  getDietsById:(req,res)=>{
        getDietById(req,(err,data)=>{
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
 updateDiets: (req, res) => {
    updateDiet(req, (err, data) => {
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
deleteDiets: (req, res) => {
    deleteDiet(req, (err, data) => {
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