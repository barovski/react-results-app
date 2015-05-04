var conf = {
	url: {
		results: 'http://www.football-data.org/soccerseasons/354/fixtures',
		leagueTable: 'http://www.football-data.org/alpha/soccerseasons/354/leagueTable'
	}
};

module.exports =  {
	displayName : 'service',
	getResults: function(){
		return $.ajax({
			//url: conf.url.results
			url: './premierLeagueFixtures.json?v='+(new Date()).getTime()
		});
	},
	getTeams: function () {
		//get teams here
		return $.Deferred().resolve(['Chelsea', 'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool']).promise();
	},
	getTable: function () {
		//get table here
		//return $.Deferred().resolve(['Chelsea', 'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool']).promise();
		return $.ajax({
			//url: conf.url.results
			url: './leagueTable.json?v='+(new Date()).getTime()
		});
	}
};