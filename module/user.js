var mongoose = require('../mongo/mongodb');
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true }
})
module.exports = mongoose.model('User', userSchema);