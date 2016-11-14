// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = 8000;
var path = require('path');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.get('/jokes', function(req, res){
  console.log(req.body);
  console.log("ON server");

  res.send(jokes);
})

app.post('/jokes', function(req, res){
  console.log(req.body);
  jokesReq = req.body
  jokes.push(jokesReq)
  res.sendStatus(201);
})

app.use(express.static('server'));



app.set('port', process.env.PORT || 8000);

//port
app.listen(app.get('port'),function(){
console.log("Listening on port: ", port);
})
