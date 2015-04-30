var React = require('react');
var Common = require('./common');

module.exports = React.createClass({
	displayName : 'eventRow',
    render: function() {
        return (
			<div className="event-row">
				<div className="name">
				<img style={{margin: '0 3px'}} width="14" height="14" src="http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"/>
				{Common.trimEventName(this.props.fixture.homeTeam)}
				</div>
				<div className="score">
					{this.props.fixture.goalsHomeTeam < 0 ? '-' : this.props.fixture.goalsHomeTeam}
				</div>
				<div className="score">
					{this.props.fixture.goalsAwayTeam < 0 ? '-' : this.props.fixture.goalsAwayTeam}
				</div>
				<div className="name">
				{Common.trimEventName(this.props.fixture.awayTeam)}
				<img style={{margin: '0 3px'}} width="14" height="14" src="http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"/>
				</div>
			</div>
		);
    }
});
