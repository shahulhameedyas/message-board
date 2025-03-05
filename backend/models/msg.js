const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    fname: String,
    description: String,
    CreateDate: {
        type: Date,
        required:true
    }

});

const msg = mongoose.model('msgs', msgSchema);

module.exports = msg;
