var React = require('react');
var Common = require('../common');
var LeagueActions = require('../actions/leagueActions');

module.exports = React.createClass({
    displayName : 'selectLeague',
    changeLeague: function () {
        LeagueActions.select(this.refs.filterTextInput.getDOMNode().value);
    },
    render: function() {
        var leagues = [];

        this.props.leagues.forEach(function(league) {
            leagues.push(<option selected={league.id == this.props.leagueId} key={league.id} value={league.id}>{league.name}</option>);
        }.bind(this));
        return ( 
				<select ref="filterTextInput" onChange={this.changeLeague}>
                    {leagues}
                </select>
			);
    }
});