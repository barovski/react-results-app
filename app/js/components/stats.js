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
                    labels : ["January","February","March","April","May","June"],
                    datasets : [
                        {
                            label: "Win",
                            fillColor : "rgba(255,255,255,0.1)",
                            strokeColor : "green",
                            highlightFill: "rgba(255,255,255,0.3)",
                            highlightStroke: "rgba(255,255,255,1)",
                            data : [3,2,4,1,1,3]
                        },
                        {
                            label: "Draw",
                            fillColor : "rgba(255,255,255,0.1)",
                            strokeColor : Common.colors.blueDark,
                            highlightFill: "rgba(255,255,255,0.3)",
                            data : [1,2,0,1,2,0]
                        },
                        {
                            label: "Lost",
                            fillColor : "rgba(255,255,255,0.1)",
                            //strokeColor : Common.colors.blueLight,
                            strokeColor : 'red',
                            highlightFill: "rgba(255,255,255,0.3)",
                            data : [0,1,0,2,0,0]
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