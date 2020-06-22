const Link = window.ReactRouterDOM.Link;

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>
					<img src="/static/img/home.jpeg" />
				</h1>
				<h1>Welcome to Babycatcher</h1>
				<h2>Let's find you a Midwife!</h2>

				<Registration setLoggedIn={this.props.setLoggedIn} />

				<h3>...or preview the <Link to="/directory">directory</Link>
				</h3>

				<h3> if you are a midwife, you can log in <Link to='/midwife-login'>here</Link></h3>
			</div>
		);
	}
}
