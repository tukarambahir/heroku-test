//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))


const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceSSL());

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