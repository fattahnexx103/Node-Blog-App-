var express = require('express');
var router = express.Router();

/* Add a post route. */
router.get('/add', function(req, res, next) {
  //render the form
  res.render('addpost',{
    'title':'Add Post'
  });
});

module.exports = router;
