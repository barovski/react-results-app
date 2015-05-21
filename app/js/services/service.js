var Common = require('../common');
var conf = {
	url: {
		results: 'http://www.football-data.org/soccerseasons/354/fixtures',
		leagueTable: 'http://www.football-data.org/alpha/soccerseasons/354/leagueTable'
	}
};

module.exports =  {
	displayName : 'service',
	getResults: function(id){
		return $.ajax({
			//url: conf.url.results
			url: './fixtures'+(id || 354) +'.json?v='+(new Date()).getTime()
		});
	},
	getTeams: function () {
		//get teams here
		return $.Deferred().resolve(['Chelsea', 'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool']).promise();
	},
	getTable: function (id) {
		//get table here
		//return $.Deferred().resolve(['Chelsea', 'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool']).promise();
		return $.ajax({
			//url: conf.url.results
			url: './leagueTable'+(id || 354) +'.json?v='+(new Date()).getTime()
		});
	},
	getLeagues: function () {
		return $.Deferred().resolve([ 
			{id:'354',name:'Premier League'}, 
			{id: '357', name: 'Serie A'},
			{id:'358',name:'Primera Division'},
			{id:'351',name:'Bundesliga'}]);
	},
	getMatchday: function(id) {
		var that = this;
		//[hardcoded] matchday
		return Common.defer(function(dfd){
			that.getTable(id).done(function(data){
				dfd.resolve(data.matchday);	
			});
		});
	},
	getScorers: function (id) {
		return $.ajax({
			//url: conf.url.results
			url: './goalScorers'+(id || 354) +'.json?v='+(new Date()).getTime()
		});
	}
};