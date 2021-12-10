const express = require('express')
const router = express.Router()
const Home = require("../models/Home")
const Comment = require("../models/Comment")

router.get('/', async (req, res) => {
    try {
        let likes
        let comments
       likes = await Home.find({})
       comments = await Comment.find({}).sort({createdAt: '-1'})
        res.render('home', {myhome:likes,mycomments:comments})
    } catch (err) {
        res.status(500).send(err)
    }
})
.get('/update/:id',  async(req, res) => {
    try {
        const{id}=req.params
        const getData =await Home.findOne({_id:id}) 
        const{like}=getData
        Home.updateOne({_id:id},{like:(Number(like)+1)})
        .then(()=>{
            res.redirect('/')
        })
    } catch (error) {
        console.log(error);
    }
})
.get('/negativ/:id',  async(req, res) => {
    try {
        const{id}=req.params
        const getData =await Home.findOne({_id:id}) 
        const{negativ}=getData
        Home.updateOne({_id:id},{negativ:(Number(negativ)+1)})
        .then(()=>{
            res.redirect('/')
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router

