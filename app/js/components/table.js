var React = require('react');
var Common = require('../common');
var SelectLeague = require('./selectLeague');
var Standing = require('./standing');
var LeagueStore = require('../stores/LeagueStore');

module.exports = React.createClass({
  displayName : 'table',
  _getLeagues: function () {
    LeagueStore.getLeagues().done(function(response) {
          this.setState({leagues: response});
      }.bind(this));
  },
  _getStandings: function () {
    LeagueStore.getStandings().done(function(response) {
          this.setState({standing: response.standing});
          Common.hideLoading();
      }.bind(this));
  },
  _getLeagueId: function () {
    return LeagueStore.getLeagueId();    
  },
  _onChange: function() {
    this._getStandings();
    this.setState({id: LeagueStore.getLeagueId()});
  },
  getInitialState: function() {
    	return {
    		standing: [],
        leagues: [],
        id: this._getLeagueId()
    	};
  	},
  componentWillMount: function () {
    this._getStandings();
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
      		<h1>League table</h1>
          <div className="filter-group">
            <SelectLeague leagueId={this.state.id} leagues={this.state.leagues}/>
      	  </div>
          <Standing leagueId={this.state.id} standing={this.state.standing}/>
    	</div>
    );
  }
});