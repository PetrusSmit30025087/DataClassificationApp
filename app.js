const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public')); 
app.use(cors()); 
app.use(fileUpload());
app.use(bodyParser.json());
//om na my databasis te connect
mongoose.connect('mongodb+srv://Petrus:Peru1234@petrusdatabase.0tgzc.mongodb.net/PetrusDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected'));


app.get("/", (req,res) => {
    res.send("hello world");
});



var fileModel = require('./model'); 

app.post('/upload',/* upload.single('file'),*/ (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        
    const myFile = req.files.file;

    //Stoor die file in die public folder van die projek
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });


    var obj = { 
        /*FileName: req.body.FileName,
        SouthAfricanID : req.body.SouthAfricanID,
        Name : req.body.Name,
        Surname : req.body.Surname,
        DateOfBirth : req.body.DateOfBirth,
        Gender: req.body.Gender,
        Race: req.body.Race,
        EmailAddress : req.body.EmailAddress,
        TelephoneNumber : req.body.TelephoneNumber */
        FileName: myFile.name,
        SouthAfricanID : true,
        Name : true,
        Surname : true,
        DateOfBirth : true,
        Gender: true,
        Race: true,
        EmailAddress : true,
        TelephoneNumber : true 
    } 
    fileModel.create(obj, (err, item) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            item.save(); 
            //res.redirect('/'); 
            console.log('added');
        } 
    });  
})




app.listen(port);