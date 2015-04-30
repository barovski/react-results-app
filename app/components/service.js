var conf = {
	url: {
		results: 'http://www.football-data.org/soccerseasons/354/fixtures',
		leagueTable: 'http://www.football-data.org/alpha/soccerseasons/354/leagueTable'
	}
};

module.exports =  {
	getResults: function(){
		return $.ajax({
			//url: conf.url.results
			url: '../premierLeagueFixtures.json'
		});
	},
	getTeams: function () {
		//get teams here
		return $.Deferred().resolve(['Chelsea', 'Manchester United', 'Manchester City', 'Arsenal', 'Liverpool']).promise();
	}
};