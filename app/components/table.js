var React = require('react');
var restApi = require('./service');
var Common = require('./common');
var Standing = require('./standing');

module.exports = React.createClass({
  displayName : 'table',
  getInitialState: function() {
    	return {
    		standing: []
    	};
  	},
  componentWillMount: function () {
	    restApi.getTable().done(function(response) {
	        this.setState({standing: response.standing});

	        Common.hideLoading();
	    }.bind(this));
	},
	componentDidMount: function () {
		Common.showLoading();	
	},
  render: function () {
    return (
    	<div className="main-container">
      		<h1>League table</h1>
      		<Standing standing={this.state.standing}/>
    	</div>
    );
  }
});