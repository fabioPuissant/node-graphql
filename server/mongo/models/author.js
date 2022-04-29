const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MongoDB handles id property
const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);
