const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: { type: Date, default: Date.now } }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;