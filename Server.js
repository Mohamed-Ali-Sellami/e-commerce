const express=require('express')
const dbconnect=require('./config/dbconnect')
const cors=require('cors')

require('dotenv').config()



const app=express()
dbconnect()
const port=process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/product' , require('./routes/product'))
app.use('/client' , require('./routes/client'))
app.use('/order' , require('./routes/order'))



app.listen(port,(err)=>err?console.log(err):console.log(`server is running in ${port}`));   
