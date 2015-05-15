var React = require('react');
var restApi = require('../services/service');
var Fixtures = require('./fixtures');
var TeamFilter = require('./teamFilter');
var RoundFilter = require('./roundFilter');
var Common = require('../common');

module.exports = React.createClass({
        displayName: 'home',
        _getResults: function() {
            restApi.getResults().done(function(response) {
                var sortedEvents = Common.sortByProp(response.fixtures, 'matchday');
                this.setState({
                    events: sortedEvents,
                    rounds: this._getRounds(sortedEvents)
                });

                Common.hideLoading();
            }.bind(this));
        },
        _getTeams: function() {
            restApi.getTeams().done(function(response) {
                this.setState({
                    teams: response
                });
            }.bind(this));
        },
        _getRounds: function(list) {
            var arr = [];
            for (var i = 0; i < parseInt(list[list.length - 1]['matchday']); i++) {
                arr.push(i + 1);
            }
            arr.unshift('All Rounds');

            return arr;
        },
        _getDefaultRound: function() {
            //[hardcoded] id
            restApi.getMatchday(354).done(function(data) {
                this.setState({
                    filterRoundText: data
                });
            }.bind(this));
        },
        getInitialState: function() {
            return {
                events: [],
                teams: [],
                rounds: [],
                filterTeamText: 'All Teams',
                filterRoundText: 'All Rounds'
            };
        },
        handleTeamChange: function(team, round) {
            if (team) {
                this.setState({
                    filterTeamText: team
                });
            } else if (round) {
                this.setState({
                    filterRoundText: round
                });
            }

        },
        componentWillMount: function() {
            this._getResults();
            this._getTeams();
            this._getDefaultRound();
        },
        componentDidMount: function() {
            Common.showLoading();
            //console.log("*!-home-cDmount"+(new Date()).getTime());
        },

        /*componentWillReceiveProps: function() {
            console.log("*!-home-cWrP"+(new Date()).getTime());
        },
        shouldComponentUpdate: function(nextProps, nextState) {
            console.log("*!-home-sCu"+(new Date()).getTime());
            return true;
        },
        componentWillUpdate: function() {
            console.log("*!-home-cWu"+(new Date()).getTime());
        },
        componentDidUpdate: function() {
            console.log("*!-home-cDu"+(new Date()).getTime());
        },
        componentWillUnmount: function() {
            console.log("*!-home-cWunmount"+(new Date()).getTime());
        },*/

        render: function() {
            return ( 
        		<div className="main-container">
        			<h1>Results</h1>	
                    <div className="filter-group">
                        <TeamFilter teams={this.state.teams} onUserChage={this.handleTeamChange}/>
        				<RoundFilter 
                            rounds={this.state.rounds} 
                            onUserChage={this.handleTeamChange}
                            filterRoundText={this.state.filterRoundText}/>
        			</div>
                    <Fixtures 
                        fixtures={this.state.events} 
                        filterTeamText={this.state.filterTeamText} 
                        filterRoundText={this.state.filterRoundText}/>
        		</div>
        	);
        }
});