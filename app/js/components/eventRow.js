var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
	displayName : 'eventRow',


	/*componentWillReceiveProps: function() {
        console.log("*!-event-row-cWrP"+(new Date()).getTime());
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log("*!-event-row-sCu"+(new Date()).getTime());
        return true;
    },
    componentWillUpdate: function() {
        console.log("*!-event-row-cWu"+(new Date()).getTime());
    },
    componentDidUpdate: function() {
        console.log("*!-event-row-cDu"+(new Date()).getTime());
    },
    componentWillUnmount: function() {
        console.log("*!-event-row-cWunmount"+(new Date()).getTime());
    },*/


    render: function() {
        return (
			<div className="event-row">
				<div className="name">
				{/*<img style={{margin: '0 3px'}} width="14" height="14" src="http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"/>*/}
				{Common.trimEventName(this.props.fixture.homeTeamName)}
				</div>
				<div className="score">
					{this.props.fixture.result.goalsHomeTeam < 0 ? '-' : this.props.fixture.result.goalsHomeTeam}
				</div>
				<div className="score">
					{this.props.fixture.result.goalsAwayTeam < 0 ? '-' : this.props.fixture.result.goalsAwayTeam}
				</div>
				<div className="name">
				{Common.trimEventName(this.props.fixture.awayTeamName)}
				{/*<img style={{margin: '0 3px'}} width="14" height="14" src="http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"/>*/}
				</div>
			</div>
		);
    }
});
