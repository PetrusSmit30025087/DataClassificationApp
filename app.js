const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



//Routes
app.get('/',(req,res) => {
    res.send('test');
    console.log('hello');
});


//connect to my Db
mongoose.connect('mongodb+srv://Petrus:<Peru1234>@petrusdatabase.0tgzc.mongodb.net/PetrusDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true }, () => console.log('connected'));

app.listen(3000);