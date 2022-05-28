const express=require('express')
const router = express.Router()
const multer = require('multer')


const { createExpenses, getAllExpenses, getExpensesById, updateExpenses, deleteExpenses }=require('./expenses.controller')

const upload = multer()

router.post("/", upload.none(), createExpenses)
router.get("/",getAllExpenses)
router.get("/:id",getExpensesById)
router.patch("/:id",upload.none(),updateExpenses)
router.delete("/:id",deleteExpenses)

module.exports=router
