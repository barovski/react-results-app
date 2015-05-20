var React = require('react');
var Common = require('../common');
var SelectLeague = require('./selectLeague');
var Scorers = require('./scorers');
var LeagueTableStore = require('../stores/LeagueTableStore');

module.exports = React.createClass({
  displayName : 'goalScorers',
  _getLeagues: function () {
    LeagueTableStore.getLeagues().done(function(response) {
          this.setState({leagues: response});
      }.bind(this));
  },
  _getScorers: function () {
    LeagueTableStore.getScorers().done(function(response) {
          this.setState({scorers: response.players});
          Common.hideLoading();
      }.bind(this));
  },
  _getLeagueId: function () {
    return LeagueTableStore.getLeagueId();    
  },
  _onChange: function() {
    this._getScorers();
    this.setState({id: LeagueTableStore.getLeagueId()});
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
    LeagueTableStore.addChangeListener(this._onChange);
	},
  componentWillUnmount: function() {
    LeagueTableStore.removeChangeListener();
  },
  render: function () {
    return (
    	<div className="main-container">
      		<h1>Goal Scorers</h1>
          <SelectLeague leagueId={this.state.id} leagues={this.state.leagues}/>
      		<Scorers leagueId={this.state.id} scorers={this.state.scorers}/>
    	</div>
    );
  }
});