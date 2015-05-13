var React = require('react');
var Common = require('../common');
var LeagueTableActions = require('../actions/leagueTableActions');

module.exports = React.createClass({
    displayName : 'selectLeague',
    changeLeague: function () {
        LeagueTableActions.select(this.refs.filterTextInput.getDOMNode().value);
    },
    render: function() {
        var leagues = [];

        this.props.leagues.forEach(function(league) {
            leagues.push(<option selected={league.id == this.props.leagueId} key={league.id} value={league.id}>{league.name}</option>);
        }.bind(this));
        return ( 
				<div className="filter-group">	
					<select ref="filterTextInput" onChange={this.changeLeague}>
                        {leagues}
                    </select>
				</div>
			);
    }
});