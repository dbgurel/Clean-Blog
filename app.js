const express = require('express');
const ejs = require('ejs');
const app = express();

//Statik Dosyaları Kullanmak
app.use(express.static('public'));
//Template Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
