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
	      				<th title="Position">P</th>
	      				<th>Name</th>
	      				<th>P</th>
	      				<th>F</th>
	      				<th>A</th>
	      				<th>GD</th>
	      			</tr>
	      		</thead>
	      		<tbody>
	      			{rows}
	      		</tbody>
      		</table>
		);
    }
});