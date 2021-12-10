const express = require("express")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/mongo-test', () => {
    console.log('Connection to mongodb database was successful!🌳')
    //bin\mongod --dbpath data
})
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')


app.use(require('./routes/home'))
app.use(require('./routes/comm'))


app.listen(PORT, () => console.log(`backend is up port ${PORT} 🚀`))