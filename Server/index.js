const express=require("express")
const cors=require('cors')
const dotenv=require('dotenv').config()
const Connection=require('./database/db')
const User=require('./routes/users')
const app=express()
const port= process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/',User)


Connection()
app.listen(port,()=>console.log(`Server is runnning on http://localhost:${port}`))