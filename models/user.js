// Standard Set-up
// Import Mongoose
const mongoose = require('mongoose');

// Define UserSchema
// Pass objects and state if required 
const userSchema = new mongoose.Schema({
    name:       {type: String, required: true},
    email:      {type: String, required: true},
    password:   {type: String, required: true}
});

// 'users' is what we call it in MongoDB Atlas -
module.exports = mongoose.model('users', userSchema);