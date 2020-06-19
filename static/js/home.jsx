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
				<Login
					setLoggedIn={this.props.setLoggedIn}
					userData={this.props.userData}
					setUserData={this.props.setUserData}
				/>
				<Registration setLoggedIn={this.props.setLoggedIn} />

				<h3>
					...or preview the <Link to="/directory">directory</Link>
				</h3>

				{/* <button onClick={'/midwifelogin'}>Midwife Login</button> */}
			</div>
		);
	}
}
