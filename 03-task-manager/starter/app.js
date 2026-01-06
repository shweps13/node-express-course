require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

const tasks = require('./routes/tasks')

app.use(express.json())
app.use(express.static('./public'))


app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`started on ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()