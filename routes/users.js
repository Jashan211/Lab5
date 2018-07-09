var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const User = require('../models/User');
const url = require('url');

/* GET users listing. */

router.get('/', authController.isLoggedIn, (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.render('error');
    } else {
      res.render('users', {
        title: 'All Users',
        users,
        user: req.user,
      });
    }
  });
});

module.exports = router;
