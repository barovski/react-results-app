var React = require('react');
var EventRow = require('./eventRow');

module.exports = React.createClass({
    displayName : 'fixtures',
    render: function() {
    	var rows = [],
    		round = 1;

            if (this.props.filterRoundText == 'All Rounds') {
                rows.push(<div className="round" key={'round_'+1}>Week {round}</div>);
            } else { 
                rows.push(<div className="round" key={'round_'+1}>Week {this.props.filterRoundText}</div>);
            }

    	this.props.fixtures.forEach(function(fixture, index) {
            //round filter
            if (this.props.filterRoundText != 'All Rounds') {
                
                //team filter
                if(this.props.filterTeamText == 'All Teams' && this.props.filterRoundText == fixture.matchday) {
                    rows.push(<EventRow fixture={fixture} key={fixture.homeTeamName + fixture.matchday} />);
                } else if (this.props.filterRoundText == fixture.matchday && ((fixture.homeTeamName).match(this.props.filterTeamText)
                        || (fixture.awayTeamName).match(this.props.filterTeamText))) {

                        rows.push(<EventRow fixture={fixture} key={fixture.homeTeamName + fixture.matchday} />); 
                }
            } else {
                //check and add round header
                if (round < fixture.matchday) {
                    round = fixture.matchday;
                    rows.push(<div key={round+'_'+fixture.matchday} className="round">Round {round}</div>);
                }

                //team filter
                if(this.props.filterTeamText == 'All Teams') {
                    rows.push(<EventRow fixture={fixture} key={fixture.homeTeamName+fixture.matchday} />);
                } else if ((fixture.homeTeamName).match(this.props.filterTeamText)
                        || (fixture.awayTeamName).match(this.props.filterTeamText)) {

                        rows.push(<EventRow fixture={fixture} key={fixture.homeTeamName + fixture.matchday} />); 
                }
            }
        }.bind(this));

         return ( 
			<div className="events-list">
				{rows}
			</div>
		);
    }
});