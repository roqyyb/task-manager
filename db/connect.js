const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url, {
         useUnifiedTopology: true  ,
         useCreateIndex: true,
         useNewUrlParser:true,
         useFindAndModify: false
    });
}

module.exports = connectDB;