var React = require('react');
var restApi = require('../services/service');
var Common = require('../common');
var StandingRow = require('./standingRow');
var appConstants = require('../constants/appConstants');

module.exports = React.createClass({
    displayName : 'standing',
    render: function() {
    	var rows = [];

    	this.props.standing.forEach(function(team, index) {
    		if (index < appConstants.leaguePromArr[this.props.leagueId][0]) {
    			rows.push(<StandingRow promotion={appConstants.promTypes.CHL} team={team} key={team.teamName} />);
    		} else if (index >= appConstants.leaguePromArr[this.props.leagueId][0] && index < appConstants.leaguePromArr[this.props.leagueId][1]) {
    			rows.push(<StandingRow promotion={appConstants.promTypes.CHL_Q} team={team} key={team.teamName} />);
    		} else if (index >= appConstants.leaguePromArr[this.props.leagueId][1] && index < appConstants.leaguePromArr[this.props.leagueId][2]) {
    			rows.push(<StandingRow promotion={appConstants.promTypes.LE} team={team} key={team.teamName} />);
    		} else if (index >= appConstants.leaguePromArr[this.props.leagueId][2] && index < appConstants.leaguePromArr[this.props.leagueId][3]) {
    			rows.push(<StandingRow promotion={appConstants.promTypes.LE_Q} team={team} key={team.teamName} />);
    		} else if (index > appConstants.leaguePromArr[this.props.leagueId][4]) {
				rows.push(<StandingRow promotion={appConstants.promTypes.REL} team={team} key={team.teamName} />);
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
				      			<td className={appConstants.promTypes.CHL}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={appConstants.promTypes.CHL_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				Chmpions League qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={appConstants.promTypes.LE}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={appConstants.promTypes.LE_Q}>
				      				&nbsp;
				      			</td>
				      			<td>
				      				League Europa qualification
				      			</td>
			      			</tr>
			      			<tr>
				      			<td className={appConstants.promTypes.REL}>
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