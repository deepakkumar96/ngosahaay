
var express = require('express'),
    router  = express.Router(),
    path = require('path')

var blog    = require('./apps/blog'),
    auth	= require('./apps/auth')


router.get('/', (req, res) =>{
	res.end('Home!!');
})

/* Certificate */

router.get('/api/certificate/:id', (req, res) =>{ //api
    const data = {
        ngoId: 1000,
        ngoName: 'Sahaay',
        formedDate: "2017-1-10", 
    };
    res.json(data)
})

router.get('/certificate', (req, res) =>{  //html
    res.sendFile(path.join(__dirname+'/views/certificate/certificate-verify.html'))
})

router.use('/blog', blog.routes);

router.use('/auth', auth.routes)

module.exports = router
