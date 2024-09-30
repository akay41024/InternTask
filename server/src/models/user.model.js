import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    role:{
        type: String,
        required: true,
        default: 'user'
    },
    location:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export { User };