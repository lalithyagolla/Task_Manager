const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MONGO DB COnnected successfully"))
    .catch((err)=> console.log(err));

app.use('/api/tasks',require('./routes/taskRoutes'))

app.get('/',(req,res)=> {
    res.send("task Manager Api is running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
