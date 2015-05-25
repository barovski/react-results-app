var React = require('react');
var Common = require('../common');
var SelectLeague = require('./selectLeague');
var Scorers = require('./scorers');
var LeagueStore = require('../stores/LeagueStore');

module.exports = React.createClass({
  displayName : 'goalScorers',
  _getLeagues: function () {
    LeagueStore.getLeagues().done(function(response) {
          this.setState({leagues: response});
      }.bind(this));
  },
  _getScorers: function () {
    LeagueStore.getScorers().done(function(response) {
          this.setState({scorers: response.players});
          Common.hideLoading();
      }.bind(this));
  },
  _getLeagueId: function () {
    return LeagueStore.getLeagueId();
  },
  _onChange: function() {
    this._getScorers();
    this.setState({id: LeagueStore.getLeagueId()});
  },
  getInitialState: function() {
    	return {
    		scorers: [],
        leagues: [],
        id: this._getLeagueId()
    	};
  	},
  componentWillMount: function () {
    this._getScorers();
    this._getLeagues();
	},
	componentDidMount: function () {
		Common.showLoading();
    LeagueStore.addChangeListener(this._onChange);
	},
  componentWillUnmount: function() {
    LeagueStore.removeChangeListener();
  },
  render: function () {
    return (
    	<div className="main-container">
      		<h1>Goal Scorers</h1>
          <div className="filter-group">
            <SelectLeague leagueId={this.state.id} leagues={this.state.leagues}/>
      		</div>
          <Scorers leagueId={this.state.id} scorers={this.state.scorers}/>
    	</div>
    );
  }
});