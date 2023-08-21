const express = require('express');
const app = express();
const port = 3000;
var data = require('./data/test.json');

// EJS is our view engine
app.set("view engine", "ejs");

// this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/Home", { "title": title });
});

app.get('/bopis', (req, res) => {
  let title = "Bopis";
  res.render("pages/Bopis", { "title": title });
});

app.get('/adobo', (req, res) => {
  let title = "Adobo";
  res.render("pages/Adobo", { "title": title });
});

app.get('/bicol', (req, res) => {
  let title = "Bicol Express";
  res.render("pages/Bicol", { "title": title });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});

//users index is our list page
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {

    title: title,
    users: data
  });
});


//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});

