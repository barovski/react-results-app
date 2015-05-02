var React = require('react');
var Home = require('./components/home.js');
var Table = require('./components/table.js');
var Footer = require('./components/footer.js');
var Router = require('react-router');
var Common = require('./components/common');


//router related
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	displayName: 'main',
	mixins: [ Router.State ],
	getInitialState: function() {
		return {
    		path: this.getPath() || '/'
    	};
	},
  	componentDidMount: function() {
		//React.findDOMNode(this)
		//Common.hideLoading();
		var windowHeight = window.innerHeight,
			headFootHeight = 50 + 30,//header + footer
			main = $('main'),
			respNav = $('.navbar-collapse .collapse-nav'),
			navBar = $('#navbar');

		//set content height so that the footer will be fixed on bootom on every device
		main.height(windowHeight-headFootHeight);

		//close menu on menu item click
		respNav.on('click',function(){
			navBar.removeClass('in');
		})
	},
	shouldComponentUpdate: function(){
		return this.state.path != this.getPath();
	},
	componentWillUpdate:function(){
		this.setState({path:this.getPath()});
	},
	render: function () {
	return (
			<div id="wrapper">
				<header>
					<nav id="main-nav" className="navbar navbar-inverse navbar-fixed-top">
						<div className="container">
						<div className="navbar-header">
				          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				          </button>
				          <a className="navbar-brand" href="#"><i className="fa fa-home fa-3"></i></a>
				        </div>


						<div id="navbar" className="navbar-collapse collapse">
			      
						<ul className="nav navbar-nav">
							<li className={this.state.path == '/' ? 'active':''}><Link className="collapse-nav" to="home">Results</Link></li>
							<li className={this.state.path === '/table' ? 'active':''}><Link className="collapse-nav" to="table">League Table</Link></li>
						</ul>
						</div>
						</div>
					</nav>
				</header>
				<main>
					<div id="dim"></div>
					<div id="loading"><i className="fa fa-spinner fa-3"></i></div>
					<RouteHandler/>
				</main>
				<Footer/>
			</div>
		);
	}
});

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="table" handler={Table}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

//render app
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});