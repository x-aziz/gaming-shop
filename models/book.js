const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  stock: Number
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
