// const User = require('../models/user');
import { responseClient, md5 } from '../util/util.js';
const consola = require('consola')
var User = require('../module/user');

// const user = new mongoose.user({
//   username: String,
//   password: String
// })
exports.login = (req, res) => {
  consola.log(User)
  User.findOne({ username: 'admin', password: 'admin' }, (err, doc) => {
    // if (err) {
    //   console.log(err, 'errr')
    // } else {
    consola.log(err, doc, 'er')
    // }
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

  if (username === 'admin' && password === 'admin1') {

    responseClient(res, 200, 1, '登录成功', userInfo)
  } else {
    responseClient(res, 200, 0, '用户不存在')
  }
  // User.findOne({
  //   email,
  //   password: md5(password + MD5_SUFFIX),
  // })
  //   .then(userInfo => {
  //     if (userInfo) {
  //       //登录成功后设置session
  //       req.session.userInfo = userInfo;
  //       responseClient(res, 200, 0, '登录成功', userInfo);
  //     } else {
  //       responseClient(res, 400, 1, '用户名或者密码错误');
  //     }
  //   })
  //   .catch(err => {
  //     responseClient(res);
  //   });
}
// module.exports = router;
