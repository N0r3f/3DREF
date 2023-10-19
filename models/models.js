const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  subcategory: String,
  tags: [String],
  views: Number,
  downloads: Number
});

const CategorySchema = new mongoose.Schema({
  name: String
});

const SubcategorySchema = new mongoose.Schema({
  name: String,
  category: String
});

const TagSchema = new mongoose.Schema({
  name: String
});

const Image = mongoose.model('Image', ImageSchema);
const Category = mongoose.model('Category', CategorySchema);
const Subcategory = mongoose.model('Subcategory', SubcategorySchema);
const Tag = mongoose.model('Tag', TagSchema);

module.exports = { Image, Category, Subcategory, Tag };
