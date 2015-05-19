var React = require('react');
var Common = require('../common');
var Chart = require('./chart');

module.exports = React.createClass({
        displayName: 'stats',
        getInitialState: function() {
            return {
                data: {}
            };
        },
        componentWillMount: function() {
            this.setState({
                data: {
                    labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
                    datasets : [
                        {
                            fillColor : "rgba(255,255,255,0.1)",
                            strokeColor : Common.colors.blueLight,
                            pointColor : "rgba(255,255,255,0.5)",
                            pointStrokeColor : Common.colors.green,
                            data : [1,1,1,0,3,3,3,3,3,3,0,3,3,0,0,1,1,0,3,3,3,3,3,3,3,3,3,0,3,3,0,11,1,1,1,3,3,3]
                        },
                        {
                            fillColor : "rgba(255,255,255,0.1)",
                            strokeColor : Common.colors.blueDark,
                            pointColor : "rgba(255,255,255,0.3)",
                            pointStrokeColor : Common.colors.green,
                            data : [1,0,3,0,1,3,0,3,3,3,3,1,1,3,1,1,3]
                        }
                    ]
                }
            });
        },
        componentDidMount: function() {
            Common.hideLoading();
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
                    <div>stats</div>
                    <Chart data={this.state.data} />
        		</div>
        	);
        }
});