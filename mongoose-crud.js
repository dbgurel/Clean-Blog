const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//create a schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo

// Photo.create({
//   title: 'Test Photo Title 1',
//   description: 'Test Photo Description',
// });

// read a photo

// Photo.find().then((docs)=>{
// console.log(docs)
// });

//update a photo

// const id = '6465eb61656fd57f31ca78fd';
// Photo.findByIdAndUpdate(id, { title: 'Sonunda Yaptim' }).then((doc) => {
//   console.log(doc);
// });

// delete a photo
// const id = '6465fbf055e7dd5db10cb2ba';
// Photo.findByIdAndDelete(id).then((doc) => {
//   console.log('document deleted', doc);
// });
