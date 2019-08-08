var { mongoose } = require('../mongo/mongodb');
const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  age: { type: Number, default: null },
  name: { type: String, default: '' },
  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now },
})
module.exports = mongoose.model('User', userSchema);