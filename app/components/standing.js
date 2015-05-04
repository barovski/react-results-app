var React = require('react');
var restApi = require('./service');
var Common = require('./common');
var StandingRow = require('./standingRow');

module.exports = React.createClass({
    displayName : 'standing',
    render: function() {
    	var rows = [];

    	this.props.standing.forEach(function(team) {
			rows.push(<StandingRow team={team} key={team.teamName} />);
        }.bind(this));

         return ( 
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
		);
    }
});