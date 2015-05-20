var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
	displayName : 'scorerRow',
    render: function() {
        return (
			<tr className="league-row">
				<td className={this.props.promotion}>
					{this.props.player.id}
				</td>
				<td className="name">
					{this.props.player.name}
				</td>
				<td className="">
					{this.props.player.team}
				</td>
				<td className="">
					{this.props.player.goals}
				</td>
				<td className="">
					{this.props.player.penalties}
				</td>
			</tr>
		);
    }
});