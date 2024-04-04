import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber:{
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },password:{
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
