const Auth = require('../../models/auther')

class Home{
   home (req, res, next) {
      const User = req.user
      res.render('home', User)
   }
}

module.exports = new Home