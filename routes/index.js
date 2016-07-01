var express = require('express');
var router = express.Router();
// var data = require("../lib/data");
var logic = require("../lib/logic")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/users")
});

router.get('/users', function(req, res, next) {
  var all = logic.names()

  res.json({
    users: all
  });
});
// var thangs = logic.getAllActiveUsers();


router.get('/active-users', function(req, res, next) {
  var actives = logic.getAllActiveUsers();
  
  res.json({
    aUsers: actives
  });
});


module.exports = router;
