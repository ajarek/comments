const mongoose = require('mongoose')
const Home = new mongoose.Schema({
    like: {
        type: Number,
        unique: false,
        default: 0

    },
    negativ: {
        type: Number,
        unique: false,
        default: 0
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('myLike', Home)