


module.exports = {
		usersData:[
			{'name': 'Deepak'},
			{'name': 'Mrinal'},
			{'name': 'Jerin'},
		],

		getAll: function(){
			return usersData;
		},
	    
	    allUsers: function(req, res){
	    	
	    	res.write('<ol>');
	    	for(var usr of this.usersData){
	    		res.write('<li>'+usr.name+'</li>');
	    		console.log('<li>'+usr.name+'</li>');
	    	}
	    	res.end('</ol>');
	    }
	};
