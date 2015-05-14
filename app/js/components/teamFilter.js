var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
    displayName : 'teamFilter',
    handleChange: function () {
        this.props.onUserChage(
            this.refs.filterTeamInput.getDOMNode().value
        ) 
    },
    render: function() {
        var teams = [];

        teams.push(<option key={1}>All Teams</option>);
        this.props.teams.forEach(function(team) {
            teams.push(<option key={team} value={team}>{team}</option>);
        });
        return ( 
				<select ref="filterTeamInput" onChange={this.handleChange}>
                    {teams}
                </select>
			);
    }
});