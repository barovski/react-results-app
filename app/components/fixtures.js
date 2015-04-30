var React = require('react');
var EventRow = require('./eventRow');

module.exports = React.createClass({
    render: function() {
    	var rows = [],
    		round = 1;

		rows.push(<div className="round">Round {round}</div>);

    	this.props.fixtures.forEach(function(fixture) {
    		if (round < fixture.matchday) {
    			round = fixture.matchday;
    			rows.push(<div className="round">Round {round}</div>);
    		}

    		if(this.props.filterText == 'All') {
    			rows.push(<EventRow fixture={fixture} key={fixture.id} />);
    		} else if ((fixture.homeTeam).match(this.props.filterText)
    				|| (fixture.awayTeam).match(this.props.filterText)) {

    				rows.push(<EventRow fixture={fixture} key={fixture.id} />);	
    		}
        }.bind(this));

         return ( 
			<div className="events-list">
				{rows}
			</div>
		);
    }
});