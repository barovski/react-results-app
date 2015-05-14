var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
    displayName : 'roundFilter',
    handleChange: function () {
        this.props.onUserChage(null, this.refs.filterRoundInput.getDOMNode().value);
    },
    render: function() {
        var rounds = [];

        for (var i = 0; i < this.props.rounds.length; i++) {
            rounds.push(<option selected={this.props.rounds[i] == this.props.filterRoundText} key={'round_'+this.props.rounds[i]} value={this.props.rounds[i]}>{this.props.rounds[i]}</option>);    
        };
        return ( 
				<select ref="filterRoundInput" onChange={this.handleChange}>
                    {rounds}
                </select>
			);
    }
});