//Install express server
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/dist/Test-heroku-Tukaram'));
app.get('/*', function(req,res) {
    
    console.log("port  "+ process.env.PORT)
    res.sendFile(path.join(__dirname+'/dist/Test-heroku-Tukaram/index.html'));
});

// Serve only the static files form the dist directory
// app.use(express.static('./dist/Test-heroku-Tukaram'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/Test-heroku-Tukaram/'}),
// );

app.get('/test',(req,res) =>
    res.send('response from backen')
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);