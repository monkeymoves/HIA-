//
// This specifies GET routes for your root URL '/', as well as '/login', '/logout' and '/callback'.
//

var express = require('express');
var passport = require('passport');
var router = express.Router();
var path = require('path')
var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: 'https://'+process.env.PROJECT_DOMAIN+'.glitch.me/callback/'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: env });
});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  });

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

//robbie route
router.get("/:name", function (req, res) {
  res.send(req.params.name)
})

module.exports = router;
