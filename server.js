//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://test-ng-nodejs-mysql.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors('*'))
// app.use(cors('https://ftw-ng-nodejs.herokuapp.com'))

app.use(express.static(__dirname + '/dist/Test-heroku-Tukaram'));

app.get('/test',(req,res) =>{
let obj ={
    data:'response from backend'
}
    res.send(obj)
});



app.get('/signin', (request, response) => {
    const statement = `select * from user`
    db.query(statement, (error, users) => {
      if (error) {
        response.send({status: 'error', error: error})
      } else {
 
          response.send({status: 'success', data:users })
      }
    })
  })
  

  app.get('/', function(req, res, next) {
    // Handle the get for this route
    response.send({status: 'success', data:'inside / route get method' })
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
   response.send({status: 'success', data:'inside / route post method' })

  });

app.get('/*', function(req,res) {
    
    console.log("port  "+ process.env.PORT)
    res.sendFile(path.join(__dirname+'/dist/Test-heroku-Tukaram/index.html'));
});








// Serve only the static files form the dist directory
// app.use(express.static('./dist/Test-heroku-Tukaram'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/Test-heroku-Tukaram/'}),
// );


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080,function(){
    console.log("running the server on port env  "+process.env.PORT)
});