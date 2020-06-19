const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const NavLink = window.ReactRouterDOM.NavLink;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;


const UpdateProfile = window.UpdateProfile;
const Registration = window.Registration;
const Login = window.Login;
const Midwife = window.Midwife;
const Directory = window.Directory;
const User = window.User;
const Home = window.Home;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			midwifeData: [],
			midwifeLoggedIn: false,
			userData: [],
			loggedIn: false,
			email: ''
		};
	}
	updateMidwifeData = (midwifeData) => {
		this.setState({ midwifeData });
	};
	setLoggedIn = (email) => {
		this.setState({ email: email, loggedIn: true });
	};
	setUserData = (userData) => {
		this.setState({ userData });
	};
	setMidwifeLoggedIn = (email) => {
		this.setState({email:email, midwifeLoggedIn: true})
	}

	render() {
		const { 
			user_id, 
			first_name, 
			last_name, 
			email, 
			password, 
			address, 
			bio, 
			img
		} = this.state.userData

		return (
			<Router>
				<Switch>
					<Route 
						path="/midwife/:mw_id" 
						render={(props) => 
							<Midwife 
								{...props} 
								updateMidwifeData={this.updateMidwifeData} 
								midwifeData={this.state.midwifeData} 
							/>
						} 
					/>
					<Route
						path="/directory"
						render={() => (
							<Directory
								midwifeData={this.state.midwifeData}
								updateMidwifeData={this.updateMidwifeData}
							/>
						)}
					/>
					<Route 
						path="/user"
						render={(props) => 
							<User
								{...props} 
								userData={this.state.userData} 
							/>
						}
					/>
					<Route 
						path="/">
						{this.state.loggedIn ? (
							<Redirect to={{pathname: `/user/${user_id}`}} userData={this.state.userData}  />
						) : (
							<Home
								setLoggedIn={this.setLoggedIn}
								setUserData={this.setUserData}
								userData={this.state.userData}
							/>
						)}
					</Route>
				</Switch>
			</Router>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#root'));
