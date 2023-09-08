const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    std: {
        type: Number,
        required: true
    },
    admitDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Student',studentSchema);