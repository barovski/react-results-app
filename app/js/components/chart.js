var React = require('react');
var Common = require('../common');

module.exports = React.createClass({
        displayName: 'chart',
        componentDidMount: function() {
            var ctx = document.getElementById("myChart").getContext("2d");
            new Chart(ctx).Line(this.props.data, { responsive: true });
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
        		<div>
                    <canvas id="myChart" width="700" height="400"></canvas>
        		</div>
        	);
        }
});