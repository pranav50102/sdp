const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true,
        
    },
    Phoneno: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    pwd: {
        type: String,
        required: true,
    },
    
}, { collection: 'reg' },
);

const UserModel = mongoose.model("Admin", UserSchema);
module.exports = UserModel;