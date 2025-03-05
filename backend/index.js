const express = require('express')
const app = express()
const dotenv = require("dotenv")
const path = require('path')
const route = require('./routes/userRoutes')
const cors = require('cors')
const DBConnect = require('./dbConnection/dbConnect')
dotenv.config({ path: path.join(__dirname, 'config', '.env') })
//db connection 
DBConnect()
app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

app.use(cors())
app.use(express.json())

app.use('/', route)

app.listen(process.env.PORT, () => {
  console.log(`server is running on : ${process.env.PORT}`)
})