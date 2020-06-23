const Route = window.ReactRouterDOM.Route;

class UserProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userData : {},
		}
	}
	
	componentDidMount() {
		
		fetch(`/api/user?userId=${localStorage.getItem('userId')}`)
		.then((response) => response.json())
		.then((data) => {
			this.setState({userData : data})
		})
	
	}  

	render() { 

		return (
			<div>
				<div>
					<h1>Welcome {this.state.userData.firstName}!</h1>
					<img src={this.state.userData.img} />
					<h2>Your Profile:</h2>
					<h3>Name</h3>
					<p>{this.state.userData.firstName} {this.state.userData.lastName}</p>
					<h3>Bio:</h3>
					<p>{this.state.userData.bio}</p>
					<h3>Address</h3>
					<p>{this.state.userData.address}</p>
					<h3>Email:</h3>
					<p>{this.state.userData.email}</p>
					<h2>Your Favorites: </h2>
					<UserFavorites />
					{/* <h2>Update Profile: </h2> */}
					{/* <UpdateProfile />	 */}	
				</div>
			</div>
		)}
	
}
