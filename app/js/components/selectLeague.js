var React = require('react');
var Common = require('../common');
var LeagueTableActions = require('../actions/leagueTableActions');

module.exports = React.createClass({
    displayName : 'selectLeague',
    handleChange: function () {
        LeagueTableActions.select(this.refs.filterTextInput.getDOMNode().value);
    },
    render: function() {
        var roundOpts = [],
            leagues = [];

        this.props.leagues.forEach(function(league) {
            leagues.push(<option key={league.id} value={league.id}>{league.name}</option>);
        });
        return ( 
				<div className="filter-group">	
					<select ref="filterTextInput" onChange={this.handleChange}>
                        {leagues}
                    </select>
				</div>
			);
    }
});