const express = require('express');
//const { env } = require('process');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const url = "mongodb://127.0.0.1:27017/sample"

mongoose.set("strictQuery", false);
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;


// CHECKING THE CONNECTION
con.on("open", function () {
    console.log("Connected...");
});

//MAKING THE APPLICATION TO READ JSON FILE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTE TO HOME.JS
const home = require('./controller/home')
app.use('/home', home)

//ROUTE TO SONG.JS 
const songs = require('./controller/songs')
app.use('/songs', songs)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});



/* 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))

});

app.post('/blog', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

//ROUTE TO SIGNUP.JS
const signup = require('./controller/signup')
app.use('/signup', signup)

//ROUTE TO LOGIN.JS
const login = require('./controller/login')
app.use('/login', login)
*/