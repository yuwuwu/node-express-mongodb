
var mongoose = require("mongoose"); //引入mongoose
const consola = require('consola')
mongoose.connect('mongodb://localhost/test'); //连接到mongoDB数据库

var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
  consola.log("连接mongodb失败");
});
db.once('open', function callback() { //监听一次打开
  //在这里创建你的模式和模型
  consola.log('连接mongodb成功!');
});

// var UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   // status: String
// });

// const Users = mongoose.model('user', UserSchema);

module.exports = mongoose;
