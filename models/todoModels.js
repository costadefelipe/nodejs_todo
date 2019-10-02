const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoSchema = Schema({
    name: {type:String},
    telefone: {type: Number},
    done: {type:Boolean}
})

module.exports = mongoose.model("Todos", TodoSchema)