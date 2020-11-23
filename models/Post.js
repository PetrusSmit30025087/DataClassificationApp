const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Filename: String,
    SouthAfricanID : Boolean,
    Name : Boolean,
    Surname : Boolean,
    DateOfBirth : Boolean,
    Gender: Boolean,
    Race: Boolean,
    EmailAddress : Boolean,
    TelephoneNumber : Boolean
    

});

module.exports = mongoose.model('Posts', PostSchema);