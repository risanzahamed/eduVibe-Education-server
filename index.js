const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


const Port = process.env.Port || 5000;

// app.get("/", (req , res) => {
//     res.send("server is runninggg")
// })

app.get("/", (req, res) => {
    res.send("server is running")
})


// app.get("/", (req, res)=>{
//     res.send("server is working")
// })


app.listen(Port, () => {
  console.log("server is running", Port)
})




module.exports = app;