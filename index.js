// node index.js
const mongoose = require('mongoose');
const UserSchema = require('./models/user');

// Replace .net/test with .net/userdb
mongoose.connect('mongodb+srv://danjaysut:password1234@usersignup-ruhg9.mongodb.net/userdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const user = new UserSchema({
    name: 'Danny3',
    email: 'bollox3@nuts.com',
    password: 'password31234'
})

// Save to Database
// user.save();

// Read from Database
UserSchema.find({}, (err, docs) => {
    console.log(docs)
})