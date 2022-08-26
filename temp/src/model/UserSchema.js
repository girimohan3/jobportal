const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        required: true

    },
    phone:{
        type: Number,
        required: true

    },
    company:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true

    },
    password:{
        type: String,
        required: true

    },
})

module.exports = {
    UserSchema: mongoose.model('User', UserSchema)
}