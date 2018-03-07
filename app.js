var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 8000
  //, hbs = require('express-hbs'); 


/* SETTING TEMPLATE ENGINE */


//pp.engine('handlebars'); 
//app.set('view engine', 'hbs');
//app.engine('hbs', hbs.express4());

app.set('views', __dirname + '/views')


/* REGISTERING MIDDLEWARES */

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//custom middlewares
var middlewares = require('./middlewares')
Object.keys(middlewares).forEach(key => {
  app.use(middlewares[key])
});



/*  LOADING BASE ROUTE */
app.use(require('./base_routes.js')) 


app.listen(port, function() {
  console.log('Listening on port ' + port)
})
