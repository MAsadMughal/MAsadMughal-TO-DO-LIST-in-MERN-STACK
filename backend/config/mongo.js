const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ToDoList").then((data) => {
    console.log(`Database connected on port ${data.connection.port}`);
}).catch((err) => {
    console.log(`Error Occured : ${err}`);
})