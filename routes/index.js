const user = require('./users')


module.exports = app => {
  app.post('/api/login', user.login)
}
