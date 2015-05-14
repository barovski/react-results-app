var React = require('react');
var restApi = require('../services/service');
var Common = require('../common');
var StandingRow = require('./standingRow');
var constants = {
		//same for every league
		promTypes: {
			CHL:'chl',
			CHL_Q:'chl-q',
			LE:'le',
			LE_Q:'le-q',
			REL:'relegation'
		},
		leaguePromArr: {
			"354": [3,4,5,6,16],
			"357": [2,3,4,5,16],
			"358": [3,4,5,6,16],
			"351": [3,4,5,6,14]
		}
	};

module.exports = React.createClass({
    displayName : 'standing',
    render: function() {
    	var rows = [];

    	this.props.standing.forEach(function(team, index) {
    		if (index < constants.leaguePromArr[this.props.leagueId][0]) {
    			rows.push(<StandingRow promotion={constants.promTypes.CHL} team={team} key={team.teamName} />);
    		} else if (index >= constants.leaguePromArr[this.props.leagueId][0] && index < constants.leaguePromArr[this.props.leagueId][1]) {
    			rows.push(<StandingRow promotion={constants.promTypes.CHL_Q} team={team} key={team.teamName} />);
    		} else if (index >= constants.leaguePromArr[this.props.leagueId][1] && index < constants.leaguePromArr[this.props.leagueId][2]) {
    			rows.push(<StandingRow promotion={constants.promTypes.LE} team={team} key={team.teamName} />);
    		} else if (index >= constants.leaguePromArr[this.props.leagueId][2] && index < constants.leaguePromArr[this.props.leagueId][3]) {
    			rows.push(<StandingRow promotion={constants.promTypes.LE_Q} team={team} key={team.teamName} />);
    		} else if (index > constants.leaguePromArr[this.props.leagueId][4]) {
				rows.push(<StandingRow promotion={constants.promTypes.REL} team={team} key={team.teamName} />);
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
			      				<th colSpan="2">Legend</th>
			      			</tr>
			      		</thead>
			      		<tbody>
				      		<tr>
				      			<td className={constants.promTypes.CHL}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={constants.promTypes.CHL_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={constants.promTypes.LE}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={constants.promTypes.LE_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={constants.promTypes.REL}>
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