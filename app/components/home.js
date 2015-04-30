var React = require('react');
var restApi = require('./service');
var Fixtures = require('./fixtures');
var Filters = require('./filters');
var Common = require('./common');

module.exports = React.createClass({
	getInitialState: function() {
    	return {
    		events: [],
    		teams: [],
    		filterText: 'All'
    	};
  	},
  	handleTeamChange: function (val) {	
  		this.setState({ filterText: val });
  	},
	componentWillMount: function () {
        restApi.getResults().done(function(response) {
            this.setState({events: Common.sortByProp(response, 'matchday')});

            Common.hideLoading();
        }.bind(this));
        restApi.getTeams().done(function(response) {
            this.setState({teams: response});
        }.bind(this));
    },
    componentDidMount: function () {
		Common.showLoading();	
    },
    render: function() {
        return ( 
				<div className="main-container">
					<h1>Results</h1>	
					<Filters teams={this.state.teams} onUserChage={this.handleTeamChange}/>
					<Fixtures fixtures={this.state.events} filterText={this.state.filterText}/>
				</div>
			);
    }
});