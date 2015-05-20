var React = require('react');
var Common = require('../common');
var ScorerRow = require('./scorerRow');
var appConstants = require('../constants/appConstants');

module.exports = React.createClass({
    displayName : 'scorers',
    render: function() {
    	var rows = [];

    	this.props.scorers.forEach(function(player) {
			rows.push(<ScorerRow player={player} key={player.id} />);
        }.bind(this));

         return ( 
         	<div>
	         	<table className="league-table table-striped">
		      		<thead>
		      			<tr>
		      				<th>#</th>
		      				<th>Pleyer</th>
		      				<th>Team</th>
		      				<th>Goals</th>
		      				<th>Pen</th>
		      			</tr>
		      		</thead>
		      		<tbody>
		      			{rows}
		      		</tbody>
	      		</table>
      		</div>
		);
    }
});