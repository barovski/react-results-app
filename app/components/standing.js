var React = require('react');
var restApi = require('./service');
var Common = require('./common');
var StandingRow = require('./standingRow');
var conf = {
		//same for every league
		promTypes: {
			CHL:'chl',
			CHL_Q:'chl-q',
			LE:'le',
			LE_Q:'le-q',
			REL:'relegation'
		},
		leaguePromArr: {
			ENG: [3,4,5,6,16]//different for every league
		}
	};

module.exports = React.createClass({
    displayName : 'standing',
    render: function() {
    	var rows = [];

    	this.props.standing.forEach(function(team, index) {
    		if (index < conf.leaguePromArr.ENG[0]) {
    			rows.push(<StandingRow promotion={conf.promTypes.CHL} team={team} key={team.teamName} />);
    		} else if (index >= conf.leaguePromArr.ENG[0] && index < conf.leaguePromArr.ENG[1]) {
    			rows.push(<StandingRow promotion={conf.promTypes.CHL_Q} team={team} key={team.teamName} />);
    		} else if (index >= conf.leaguePromArr.ENG[1] && index < conf.leaguePromArr.ENG[2]) {
    			rows.push(<StandingRow promotion={conf.promTypes.LE} team={team} key={team.teamName} />);
    		} else if (index >= conf.leaguePromArr.ENG[2] && index < conf.leaguePromArr.ENG[3]) {
    			rows.push(<StandingRow promotion={conf.promTypes.LE_Q} team={team} key={team.teamName} />);
    		} else if (index > conf.leaguePromArr.ENG[4]) {
				rows.push(<StandingRow promotion={conf.promTypes.REL} team={team} key={team.teamName} />);
    		} else {
    			rows.push(<StandingRow promotion={''} team={team} key={team.teamName} />);
    		}
        }.bind(this));

         return ( 
         	<div>
	         	<table className="league-table table-striped">
		      		<thead>
		      			<tr>
		      				<th>#</th>
		      				<th>Team</th>
		      				<th title="Played">P</th>
		      				<th>F</th>
		      				<th>A</th>
		      				<th>GD</th>
		      				<th title="Points">Pts</th>
		      			</tr>
		      		</thead>
		      		<tbody>
		      			{rows}
		      		</tbody>
	      		</table>
	      		<div className="legend-table">
		      		<table className="table-striped">
			      		<thead>
			      			<tr>
			      				<th colspan="2">Legend</th>
			      			</tr>
			      		</thead>
			      		<tbody>
				      		<tr>
				      			<td className={conf.promTypes.CHL}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={conf.promTypes.CHL_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={conf.promTypes.LE}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={conf.promTypes.LE_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={conf.promTypes.REL}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Relegation
				      			</td>
			      			</tr>
			      		</tbody>
		      		</table>	
	      		</div>
      		</div>
		);
    }
});