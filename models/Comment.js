const mongoose = require('mongoose')
const Comment = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})
module.exports = mongoose.model('mycomment', Comment)