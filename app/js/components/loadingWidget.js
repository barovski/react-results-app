var React = require('react');

module.exports = React.createClass({
	displayName : 'loadingWidget',
    render: function() {
        return (
			<div className="dim-widget">
				<i className="fa fa-spinner fa-3"></i>
			</div>
		);
    }
});
