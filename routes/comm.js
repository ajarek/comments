const express = require('express')
const router = express.Router()
const Comment = require("../models/Comment")

router.post('/comments', async (req, res) => {
    try {
        const newComment = new Comment({
            email: req.body.email,
            text: req.body.text,
        })
        const mesage = await newComment.save()
        console.log(mesage)
        res.redirect('/')
    } catch (err) {
        res.send('Status 500 ,An error happened!' + err)
    }
})
module.exports = router