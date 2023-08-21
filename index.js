const express = require('express');
const app = express();
const port = 3000;

// EJS is our view engine
app.set("view engine", "ejs");

// this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/Home",{"title":title});
});

app.get('/bopis', (req, res) => {
  let title = "Bopis";
  res.render("pages/Bopis",{"title":title});
});

app.get('/adobo', (req, res) => {
  let title = "Adobo";
  res.render("pages/Adobo",{"title":title});
});

app.get('/bicol', (req, res) => {
  let title = "Bicol Express";
  res.render("pages/Bicol",{"title":title});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

