var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title:'Article - One',
    heading:'Article One',
    date:'Sep 5,2016',
    content:' <p>This is article one</p>'
};

function createTemplate(data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = '<html><head><title>'+title+'</title></head><body><div class="container"><div><a href="/">Home</a></div><hr/> <h3>'+heading+'</h3><div>'+date+'</div><div>'+content+'</div></div></body></html>';
    
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
app.get('/submitname', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(names);
});

app.get('/article', function (req, res) {
  res.send(createTemplate(articleOne));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;    
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
