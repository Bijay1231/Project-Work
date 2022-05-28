const {createTax,getAllTax,getTaxById,getMultiTax,updateTax,deleteTax}=require('./tax.service')
module.exports=({
    createTaxs:(req,res)=>{
    createTax(req,(err,data)=>{
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
    getAllTaxs:(req,res)=>{
        getAllTax(req,(err,data)=>{
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
  getTaxsById:(req,res)=>{
        getTaxById(req,(err,data)=>{
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
   getMultiTaxs:(req,res)=>{
        getMultiTax(req,(err,data)=>{
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
 updateTaxs: (req, res) => {
    updateTax(req, (err, data) => {
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
deleteTaxs: (req, res) => {
    deleteTax(req, (err, data) => {
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