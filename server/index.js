const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")

const app = express()
require("dotenv").config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser: true,  // Fixed typo here
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB Connection SuccessFully")
})


// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("DB Connection Successfully");
//   })
//   .catch((error) => {
//     console.error("DB Connection Error:", error);
//     process.exit(1);
//   });

const server = app.listen(process.env.PORT ,()=>{
    console.log(`Server start on this port ${process.env.PORT}`)
})

