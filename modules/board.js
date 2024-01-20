const mongoose = require("mongoose");

const boardShema = new mongoose.Schema({
    text: {
        type: String,
      },
    created_on:{
        type: Date,
        default: Date.now
    },
    bumped_on:{
        type: Date,
         default: Date.now
    },
    reported:{
        type: Boolean
    },
    delete_password:{
        type: String
    },
    replies :{
        type: []
    },
})

module.exports = mongoose.model("board", boardShema);