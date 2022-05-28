const { createExpense, deleteExpense,getAllExpense,updateExpense,getExpenseById }=require('./expenses.service')
module.exports=({
    createExpenses:(req,res)=>{
        createExpense(req,(err,data)=>{
            console.log(data)
            if(err){
                res.json({
                    succes:0,
                    msg:"error while inserting "+err
                })
            }
            res.json({
                succes:1,
                result:data
            })
        })
    },getAllExpenses:(req,res)=>{
        getAllExpense(req,(err,data)=>{
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
  getExpensesById:(req,res)=>{
        getExpenseById(req,(err,data)=>{
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
 updateExpenses: (req, res) => {
    updateExpense(req, (err, data) => {
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
deleteExpenses: (req, res) => {
    deleteExpense(req, (err, data) => {
        if (err) {
            res.json({
                success: 0,
                message: "unable to delete" + err
            })
        } else {
            res.json({
                success: 1,
                msg: "records delete succesfully"
            })
        }
    })
}
})