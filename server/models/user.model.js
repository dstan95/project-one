const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {type: String, trim: true, required: true},
    lname: {type: String, trim: true, required: true},
    username: {type: String, trim: true, required: true, unique: true},
    email: {type: String, trim: true, required: true, unique: true},
    password: {type: String, trim: true, required: true},
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;