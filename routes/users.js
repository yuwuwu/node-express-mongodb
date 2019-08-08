// const User = require('../models/user');
import { responseClient, md5 } from '../util/util.js';
const consola = require('consola')
var User = require('../module/user');

// const user = new mongoose.user({
//   username: String,
//   password: String
// })
exports.login = (req, res) => {
  console.log(User, 123123213)
  User.findOne({ username: 'admin', password: 'admin' }, (err, doc) => {
    consola.log(2222)
    if (err) {
      console.log(err, 'errr')
    } else {
      console.log(err, doc, 'er')
    }
  })
  let { username, password } = req.body;
  if (!username) {
    responseClient(res, 200, 0, '用户名不可为空');
    return;
  }
  if (!password) {
    responseClient(res, 200, 0, '密码不可为空');
    return;
  }
  var userInfo = {
    name: 'test',
    token: 'qwejchsudufdiuw'
  }

  if (username === 'admin' && password === 'admin') {

    responseClient(res, 200, 1, '登录成功', userInfo)
  } else {
    responseClient(res, 200, 0, '用户不存在')
  }

}
// module.exports = router;
