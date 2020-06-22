const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const NavLink = window.ReactRouterDOM.NavLink;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const MidwifeLogin = window.MidwifeLogin;
const UpdateProfile = window.UpdateProfile;
const Registration = window.Registration;
const Login = window.Login;
const Midwife = window.Midwife;
const Directory = window.Directory;
const UserProfile = window.UserProfile;
const Home = window.Home;

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/directory">Directory of Midwives</a></li>
				<li><a href="/user-login">Log In</a></li>
				<li><a href="/logout">Log Out</a></li>
              </ul>
            </div>
        );
    }
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			midwifeData: [],
			midwifeLoggedIn: false,
			userData: [],
			loggedIn: false,
			userId: ''
		};
	}
	updateMidwifeData = (midwifeData) => {
		this.setState({ midwifeData });
	};
	setMidwifeLoggedIn = (mwId) => {
		this.setState({mwId: mwId, midwifeLoggedIn: true})
	}
	setLoggedIn = (userId) => {
		this.setState({ userId: userId, loggedIn: true });
	};
	setUserData = (userData) => {
		this.setState({ userData });
	};
	setLocalStorage(userId) {
		localStorage.setItem('userId', JSON.stringify(userId));
	};
	setLoggedOut = () => {
		this.setState({midwifeLoggedIn: false, loggedIn: false})
	}
	componentDidMount() {
		const userId = localStorage.getItem('userId')
		if (userId != null) {
			this.setLoggedIn(userId)
		}
	}
	
	render() {
 
		return (
			<Router>
				<Navbar />
				<Switch>
				<Route 
					path="/logout" 
					render={(props) => 
						<Logout 
							{...props}
							setLoggedOut={this.setLoggedOut}
						/>
					} 
				/>
				<Route 
					path="/midwife-profile/:mwId" 
					render={(props) => 
						<MidwifeProfile
							{...props} 
							midwifeData={this.state.midwifeData}
							updateMidwifeData={this.updateMidwifeData} 
						/>
					} 
				/>
				<Route 
					path="/midwife-login">
					{this.state.midwifeLoggedIn ? (
						<Redirect 
							to={{pathname: `/midwife-profile/${this.state.mwId}`}}
							midwifeData={this.state.midwifeData} 
							mwId = {this.state.mwId} />	
						) : (
							<MidwifeLogin 
								midwifeData={this.state.midwifeData}	
								setMidwifeLoggedIn={this.setMidwifeLoggedIn}
								updateMidwifeData={this.updateMidwifeData}
							/>
						)}
					</Route>
					<Route 
						path="/midwife/:mw_id" 
						render={(props) => 
							<Midwife 
								{...props} 
								midwifeData={this.state.midwifeData} 
								updateMidwifeData={this.updateMidwifeData} 
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
						path="/user/:user_id"
						render={(props) => 
							<UserProfile
								{...props} 
								userData={this.state.userData}
								userId={this.state.userId}
							/>
						}
					/>
					<Route 
						path="/user-login">
						{this.state.loggedIn ? (
							<Redirect to={{pathname: `/user/${this.state.userId}`}} userId={this.state.userId} userData={this.state.userData}  />
						) : (
							<Login
								userData={this.state.userData}
								setLoggedIn={this.setLoggedIn}
								setUserData={this.setUserData}
								setLocalStorage={this.setLocalStorage}
							/>
						)}
					</Route>
					<Route 
						path="/">
						{this.state.loggedIn ? (
							<Redirect to={{pathname: `/user/${this.state.userId}`}} userId={this.state.userId} userData={this.state.userData}  />
						) : (
							<Home
								userData={this.state.userData}
								setLoggedIn={this.setLoggedIn}
								setUserData={this.setUserData}
								setLocalStorage={this.setLocalStorage}
							/>
						)}
					</Route>
				</Switch>
			</Router>
		);
	}

}
ReactDOM.render(<App />, document.querySelector('#root'));


