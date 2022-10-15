const express = require('express')
const app = express()
const cors = require('cors')
const {createPost,getPost,getAllPost} = require('./db.js')
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

//create post entry
app.post('/create',createPost,(req,res) => {

    return res.status(201).json('CREATED')
    
})
//get all post entry
app.get('/',getAllPost,(req,res) => {
     if(res.result) {

        return res.json(res.result.rows)

     }

     return res.json('error!!!')
})


//get one post
app.get('/get/:id',getPost,(req,res) => {
    if(res.result) {

        return res.json(res.result.rows)

     }

     return res.json('error')
})

app.listen(PORT,() => console.log(`[SERVER-STATUS] server started on port ${PORT}`))