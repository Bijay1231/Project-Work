const express=require('express')
const  router=express.Router();

const Razorpay=require('razorpay');
const request=require('request')

const keys=require('../../../keys')

const razorInstance = new Razorpay({
  key_id :'rzp_test_CpGa9nXg1h0AC7',
  key_secret :'uYtIxWXiFGyZ1U6pRG6S10c6'
})


router.get("/order",(req,res)=>{
  try{
    const options ={
      amount : 10*100,
      currency : "INR",
      receipt: "receipt#1",
      payment_capture: 0, //1

    };
    razorInstance.orders.create(options,async function(err,order){
      if(err){
        return res.status(500).json({
          message: "Something error!s"
        })
      }
      return res.status(200).json(order)
    });
  }
  catch(err){
    return res.status(500).json({
      message: "Something error!s"
    })
  }
});

router.post("/capture/:paymentId",(req,res)=>{
  try{
    return request(
      {
        method : "POST",
        url : `https://${keys.razorIdkey}:${keys.razorIdSecret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form:{
          amount : 10 *100,
          currency: "INR"
        },
      },
      async function(err,response,body){
        if(err){
          return res.status(500).json({
            message: "Something error!s"
          })
        }
        return res.status(200).json(body)
      }
    )
  }
  catch(err){
    return res.status(500).json({
      message: err.message
    })
  }
})

module.exports = router;


