var mongoose = require('mongoose');


var FileSchema = mongoose.Schema({
    FileName: String,
    SouthAfricanID : Boolean,
    Name : Boolean,
    Surname : Boolean,
    DateOfBirth : Boolean,
    Gender: Boolean,
    Race: Boolean,
    EmailAddress : Boolean,
    TelephoneNumber : Boolean
    

});

module.exports = new mongoose.model('Posts', FileSchema);