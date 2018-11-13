var express = require('express');
var router = express.Router();

var betting = require('../contracts/medicine/contract');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Medicine'
  });
});

router.get('/admin', function (req, res, next) {
  res.render('admin', {
    title: 'Admin'
  });
});


module.exports = router;