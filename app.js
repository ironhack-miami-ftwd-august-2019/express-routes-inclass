// app.js
const express = require('express');
const app     = express();
const path    = require('path'); 
const hbs     = require('hbs');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res, next) {
    console.log(req.query);
    //Query your Database and 
    //Save into your Database -- success
    res.render('index.hbs', { query: req.query} )
    //res.render, res.json, res.send, res.end, 
    //req.query, req.params
})



app.get('/animal/:kind/:size', (req, res, next) =>{
    console.log(req.params, req.query)
    res.render('index.hbs', { params: req.params, query:req.query} )
})



app.get('/signup',  (req, res, next)=>{
    res.render('signup.hbs')
})




app.post('/signup', (req, res,next) => {
    console.log(req.body)
    //res.redirect('back')
    res.render('signup', req.body)
})



app.get('/private', isLoggedIn, function (req, res, next) {


    res.render('private.hbs')

})


function isLoggedIn(req,res,next) {
    console.log('in the middle')
    var loggedIn = true
    //later on we are gonna learn how to validate 
    // 
    if(loggedIn){
        next()
    }else{
        res.redirect('/signup')
    }
}

app.listen(3000, () => console.log('App listening on port 3000!'));