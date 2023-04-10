const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

// Task model/Class
const Task = mongoose.model('Task', taskSchema);

module.exports.Task = Task;