const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGO_URI

mongoose
    .connect(uri)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))