
var express = require('express'),
    router  = express.Router(),
    path = require('path')

var blog    = require('./apps/blog'),
    auth	= require('./apps/auth')


router.get('/', (req, res) =>{
	res.end('Home');
})

router.use('/blog', blog.routes);

router.use('/auth', auth.routes)

module.exports = router
