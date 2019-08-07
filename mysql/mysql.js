//mysql连接池配置文件
var mysql = require('mysql');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  //用户名
  password: '123456',   //密码
  database: 'test',
  port: '3306'     //端口号
});

/**
 * 对query执行的结果自定义返回JSON结果
 */
function responseDoReturn(res, result, resultJSON) {
  if (typeof result === 'undefined') {
    res.json({
      code: '201',
      msg: 'failed to do'
    });
  } else {
    res.json(result);
  }
};

/**
 * 封装query之sql带不占位符func
 */
function query() {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('与MySQL数据库建立连接失败！');
      console.log('错误信息为：' + err);
    } else {
      var userAddSql = 'select * from user';
      var userAddSql_Params = ['Wilson', 55];
      connection.query(userAddSql, function (err, rows) {
        if (err) {
          console.log(err)
          connection.release()
          return
        }
        console.log('INSERT ID:', rows);
        //     callback(err, rows);
        //     //释放链接
        connection.release();
      });
    }
  });
  // INSERT INTO cs_user(username,password) VALUES ('巴巴','baba');
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql, args, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, args, function (err, rows) {
      callback(err, rows);
      //释放链接
      connection.release();
    });
  });
}

//exports
module.exports = {
  query: query,
  queryArgs: queryArgs,
  doReturn: responseDoReturn
}