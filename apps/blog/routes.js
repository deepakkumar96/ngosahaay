var express = require('express'),
	router  = express.Router(),
	ctrl	= require('./controllers')


router.get('/', (req, res) => res.render('blog/article'));

router.get('/about', ctrl.blogctrl.about);

module.exports = router
