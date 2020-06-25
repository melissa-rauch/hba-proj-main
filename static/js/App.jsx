const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const NavLink = window.ReactRouterDOM.NavLink;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;


const SMSForm = window.SMSForm;
const UploadPhoto = window.UploadPhoto;
const UserFavorites = window.UserFavorites;
const MidwifeLogin = window.MidwifeLogin;
const UpdateProfile = window.UpdateProfile;
const Registration = window.Registration;
const Login = window.Login;
const Midwife = window.Midwife;
const Directory = window.Directory;
const UserProfile = window.UserProfile;
const Home = window.Home;

class Navbar extends React.Component{
	constructor(props) {
		super(props)
		
	}
    render() {
		
		
        return (
            <div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/directory">View Directory</a></li>
				<li><a href="/user-login">Login</a></li>
				<li><a href="/logout">Log out</a></li>
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
			mwLoggedIn: false,
			userData: [],
			loggedIn: false,
			userId: ''
		};
	}
	updateMidwifeData = (midwifeData) => {
		this.setState({ midwifeData });
	};
	setMidwifeLoggedIn = (mwId) => {
		this.setState({mwId: mwId, mwLoggedIn: true})
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
		this.setState({mwLoggedIn: false, loggedIn: false})
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
					{this.state.mwLoggedIn ? (
						<Redirect 
							to={{pathname: `/midwife-profile/${this.state.mwId}`}}
							midwifeData={this.state.midwifeData} 
							mwId = {this.state.mwId} 
							setMidwifeLoggedIn={this.setMidwifeLoggedIn}/>	
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
								midwifeData={this.state.midwifeData}
							/>
						}
					/>
					<Route 
						path="/user-login">
						{this.state.loggedIn ? (
							<Redirect 
								to={{pathname: `/user/${this.state.userId}`}} 
								userId={this.state.userId} 
								userData={this.state.userData}  />
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


