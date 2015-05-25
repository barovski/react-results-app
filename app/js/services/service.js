var Common = require('../common');

module.exports =  {
	displayName : 'service',
	getResults: function(id){
		return $.ajax({
			url: './fixtures'+(id || 354) +'.json?v='+(new Date()).getTime()
		});
	},
	getTeams: function (id) {
		var that = this;
			id = id || 354,
			teams = [];
		
		return Common.defer(function(dfd){
			that.getTable(id).done(function(data){
				for (var i = 0; i < data.standing.length; i++) {
					teams.push(Common.trimEventName(data.standing[i].teamName));
				};
				dfd.resolve(teams);
			});
		});
	},
	getTable: function (id) {
		return $.ajax({
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
			id = id || 354;

		return Common.defer(function(dfd){
			that.getTable(id).done(function(data){
				dfd.resolve(data.matchday);
			});
		});
	},
	getScorers: function (id) {
		return $.ajax({
			url: './goalScorers'+(id || 354) +'.json?v='+(new Date()).getTime()
		});
	}
};