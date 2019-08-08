var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var mysql = require('../mysql/mysql')

// api下的接口都会在这个文件中定义

router.get('/', function (req, res, next) {
  res.render('index', { title: '231123122ress' });
});
router.post('/login', function (req, res, next) {
  var obj = {
    code: 1,
    token: 'admin',
    user: {
      name: 'admin'
    }
  }
  res.json(obj);
});

router.post('/test', function (req, res, next) {
  // console.log(mysql.query)
  // mysql.query()
  res.send({ abc: 123 })

});
router.post('/adduser', function (req, res, next) {
  console.log(req.body)
  var sql = 'INSERT INTO user SET  ?'
  var obj = {
    id: 3,
    name: '测试'
  }
  mysql.queryArgs(sql, obj, (err, res) => {
    console.log(res, 'res')
    console.log(err, 'err')
  })
  res.send({ mes: '成功' })
});

module.exports = router;
