var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
	displayName : 'leagueRow',
    render: function() {
        return (
			<tr className="league-row">
				<td className={this.props.promotion}>
					{this.props.team.position}
				</td>
				<td className="name">
				{/*<img style={{margin: '0 3px'}} width="14" height="14" src="http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"/>*/}
				{Common.trimEventName(this.props.team.teamName)}
				</td>
				<td className="">
					{this.props.team.playedGames}
				</td>
				<td className="">
					{this.props.team.goals}
				</td>
				<td className="">
					{this.props.team.goalsAgainst}
				</td>
				<td className="">
					{this.props.team.goalDifference}
				</td>
				<td className="">
					{this.props.team.points}
				</td>
			</tr>
		);
    }
});