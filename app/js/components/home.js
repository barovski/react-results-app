var React = require('react');
var Fixtures = require('./fixtures');
var TeamFilter = require('./teamFilter');
var RoundFilter = require('./roundFilter');
var SelectLeague = require('./selectLeague');
var LeagueStore = require('../stores/LeagueStore');
var Common = require('../common');

module.exports = React.createClass({
        displayName: 'home',
        _getResults: function() {
            LeagueStore.getFixtures().done(function(response) {
                var sortedEvents = Common.sortByProp(response.fixtures, 'matchday');
                this.setState({
                    events: sortedEvents,
                    rounds: this._getRounds(sortedEvents)
                });

                Common.hideLoading();
            }.bind(this));
        },
        _getTeams: function() {
            LeagueStore.getTeams().done(function(response) {
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
            LeagueStore.getMatchday().done(function(data) {
                this.setState({
                    filterRoundText: data
                });
            }.bind(this));
        },
        _getLeagueId: function () {
            return LeagueStore.getLeagueId();
        },
        _getLeagues: function () {
            LeagueStore.getLeagues().done(function(response) {
                this.setState({leagues: response});
            }.bind(this));
        },
        _onChange: function() {
            this._getResults();
            this._getTeams();
            this._getDefaultRound();
            this.setState({id: LeagueStore.getLeagueId()});

            this.setState({
                filterTeamText: 'All Teams'
            });
        },
        getInitialState: function() {
            return {
                events: [],
                teams: [],
                rounds: [],
                filterTeamText: 'All Teams',
                filterRoundText: 'All Rounds',
                leagues: [],
                id: this._getLeagueId()
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
            this._getLeagues();
        },
        componentDidMount: function() {
            Common.showLoading();
            LeagueStore.addChangeListener(this._onChange);
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
        },*/
        componentWillUnmount: function() {
            LeagueStore.removeChangeListener();
            //console.log("*!-home-cWunmount"+(new Date()).getTime());
        },

        render: function() {
            return ( 
        		<div className="main-container">
        			<h1>Results</h1>	
                    <div className="filter-group">
                        <SelectLeague leagueId={this.state.id} leagues={this.state.leagues}/>
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