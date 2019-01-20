const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;
const jwt = require('jsonwebtoken');
const config = require('./config')
const ValidateToken = require('./ValidateToken')

var app = express();

app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: false}));


let countries = ['Nigeria', 'Ghana'];
let username = 'admin'
let password = 'admin'

//api endpoints
app.post('/login', function(req, res){
    let usernameL = req.body.username;
    let passwordL = req.body.password
    if (usernameL == username && passwordL == password){
        
        var token = jwt.sign({id: 'admin'}, config.secret, {
            expiresIn: 86400
        });
        console.log(usernameL)
        res.status(200).send({auth: true, token: token})

    }else {
        res.status(401).send('Unauthorized Login')
    }
})

app.get('/countries',  ValidateToken, (req, res, next)=>{
   var username = req.userId;
   
   if (!username) {
      res.status(401).send('Not Authorized')
   }else{
    res.send(countries)
    }
})

app.put('/countries/:country', ValidateToken, (req, res, next)=>{
   var country = req.params.country
  // country = JSON.stringify(country)
  if (!username) {
    res.status(401).send('Not Authorized')
 }else{
    countries.push(country)
    res.send('The Country added is: ' + country) 
  }
   
})

app.delete('/countries/:country', (req, res) => {
    let country = req.params.country;
    if (!username) {
        res.status(401).send('Not Authorized')
     }else{
        for (var i=0; i <= countries.length; i++){
            if(countries[i] == country){
                countries.splice(i, 1)
                break;
                
            }
        }
        res.send('Deleted: ' + country) 
      }
    
    
})

app.listen(port, ()=>{
    console.log('Serving your api on '+ port)
})
