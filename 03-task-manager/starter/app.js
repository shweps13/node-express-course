require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const tasks = require('./routes/tasks')

app.use(express.json())

app.use('/api/v1/tasks', tasks)



app.get('/hello', (req, res) => {
    res.send('Test')
})

const port = 3000
const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`started on ${port}`))
    } catch (err) {
        console.log(err)
    }
}

start()