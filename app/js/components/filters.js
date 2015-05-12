var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
    displayName : 'filters',
    handleChange: function () {
        this.props.onUserChage(
            this.refs.filterTextInput.getDOMNode().value
        ) 
    },
    render: function() {
        var roundOpts = [],
            teams = [];

        /*this.props.rounds.forEach(function(round) {
            roundOpts.push(<option key={team}>{round}</option>);
        });*/

        teams.push(<option key={0}>All</option>);
        this.props.teams.forEach(function(team) {
            teams.push(<option key={team} value={team}>{team}</option>);
        });
        return ( 
				<div className="filter-group">	
					<select ref="filterTextInput" onChange={this.handleChange}>
                    {teams}
                    </select>
				</div>
			);
    }
});