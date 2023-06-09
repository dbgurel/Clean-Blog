const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Photo');
const ejs = require('ejs');
const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db');
//Statik Dosyaları Kullanmak

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template Engine

app.set('view engine', 'ejs');

// Routes

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/add', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});
const port = 3000;

//server listen

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
