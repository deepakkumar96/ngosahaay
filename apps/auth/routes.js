var express = require('express'),
    router  = express.Router(),
    ctrl    = require('./controllers');
    users   = require('./controllers/users')

router.get('/register', ctrl.auth.register);

router.get('/login', ctrl.auth.login);

router.get('/users', (req, res) => users.allUsers(req, res));

module.exports = router
