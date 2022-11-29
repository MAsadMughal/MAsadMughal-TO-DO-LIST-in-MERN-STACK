const mongoose = require('mongoose');
const Model = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, task: {
        type: String,
        required: true
    }
})

const listModel = mongoose.model("TO DO LIST", Model);
module.exports=listModel;