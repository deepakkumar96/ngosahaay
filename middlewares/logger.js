
const visited = {};


module.exports = function(req, res, next){
	console.log(req.method + '\t' + req.originalUrl)
	next();
}
