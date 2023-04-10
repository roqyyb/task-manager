const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const port = 8000;
const connectDB = require('./db/connect');
const async = require('./middleware/async');
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

// middlewares
app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler);




const start = async()=>{
    try {
        await connectDB('mongodb://127.0.0.1/01-TASK-MANAGER')
        app.listen(port, ()=> console.log(`Listening on port ${port}...`))
    } catch (error) {
        console.log('Could not connect to MongoDB.', error.message)
    }
}
start();