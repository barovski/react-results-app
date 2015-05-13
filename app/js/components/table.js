var React = require('react');
var Common = require('../common');
var SelectLeague = require('./selectLeague');
var Standing = require('./standing');
var LeagueTableStore = require('../stores/LeagueTableStore');

module.exports = React.createClass({
  displayName : 'table',
  _getLeagues: function () {
    LeagueTableStore.getLeagues().done(function(response) {
          this.setState({leagues: response});
      }.bind(this));
  },
  _getStandings: function () {
    LeagueTableStore.getStandings().done(function(response) {
          this.setState({standing: response.standing});
          Common.hideLoading();
      }.bind(this));
  },
  _getLeagueId: function () {
    return LeagueTableStore.getLeagueId();    
  },
  _onChange: function() {
    this._getStandings();
    this.setState({id: LeagueTableStore.getLeagueId()});
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
    LeagueTableStore.addChangeListener(this._onChange);
	},
  componentWillUnmount: function() {
    LeagueTableStore.removeChangeListener();
  },
  render: function () {
    return (
    	<div className="main-container">
      		<h1>League table</h1>
          <SelectLeague leagueId={this.state.id} leagues={this.state.leagues}/>
      		<Standing leagueId={this.state.id} standing={this.state.standing}/>
    	</div>
    );
  }
});