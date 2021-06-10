// This file handles connection logic to mongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Standard port for mongoDB: 27017
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB successfully");

}).catch((e) =>{
    console.log("Error trying to connect to MongoDB")
    console.log(e);
});


// To prevent deprecation warnings (from MongoDB)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}