const Link = window.ReactRouterDOM.Link;

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<div >
				<img id="center-img" src="/static/img/home.jpeg" />
				<div className="container">
					<h1 id="home-header">Welcome to Babycatcher</h1>
					<h2 id="home-header">Let's find you a Midwife!</h2>
				</div>
				<UserReg setLoggedIn={this.props.setLoggedIn} />
			</div>
		);
	}
}
