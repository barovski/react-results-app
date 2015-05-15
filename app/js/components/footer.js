var React = require('react');

module.exports = React.createClass({
        displayName: 'footer',
        _setFooterMenuEvents: function() {
            var main = $('main'),
                container = $('.main-container'),
                footDown = $(this.refs.footDown.getDOMNode()),
                footUp = $(this.refs.footUp.getDOMNode());

            footDown.on('click', function(e) {
                main.animate({
                    scrollTop: container.height()
                }, 'slow');
            });

            footUp.on('click', function(e) {
                main.animate({
                    scrollTop: 0
                }, 'slow');
            });
        },
        componentDidMount: function() {
            this._setFooterMenuEvents();
        },
        render: function() {
		    return (
				<footer className="main-footer">
					<div className="left">
						<i ref="footMenu" className="fa fa-bars fa-3"></i>
					</div>
					<div className="right">
						<i ref="footDown" className="fa fa-level-down fa-3"></i>
						<i ref="footUp" className="fa fa-level-up fa-3"></i>
					</div>
				</footer>
			);
  		}
});