
auth = {

	register: function(req, res){
		res.end('register')
	},
	login: function(req, res){
		res.end('login : ' + res.ip)
	}

}

module.exports = auth