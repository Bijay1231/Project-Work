const express = require('express');
const cors =require('cors')
const app = express()
const https = require("https")
const fs = require("fs")



const categoryRouter = require('./api/controller/category/category.router')
const productRouter = require('./api/controller/product/product.router')
const orderRouter = require('./api/controller/order/order.router')
const addressRouter = require('./api/controller/address/address.router')
const usersRouter = require('./api/controller/users/users.router')
const expensesRouter = require('./api/controller/expenses/expenses.router')
const taxRouter = require('./api/controller/tax/tax.router')
const couponRouter = require('./api/controller/coupons/coupon.router')
const razorpayRouter = require('./api/controller/razorpay/razorpay.router')


app.use(cors());
app.use(express.json())

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/address', addressRouter)
app.use('/users', usersRouter)
app.use('/expenses', expensesRouter)
app.use('/tax', taxRouter)
app.use('/coupon',couponRouter)
app.use('/razorpay',razorpayRouter)
app.get('/upload/product_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/product_img/'+req.params.id));
app.get('/upload/users_img/:id',(req,res)=> res.sendFile(__dirname + '/upload/users_img/'+req.params.id));

app.listen(4040, () => {
    console.log('HTTPS Server running on port 4040');
});
  