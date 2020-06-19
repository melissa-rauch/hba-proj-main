class User extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userData : {}
		}
	}
	
	componentDidMount() {
		console.log(localStorage.getItem('userId'), "heyyaaa")
		fetch(`/api/user?userId=${localStorage.getItem('userId')}`)
		.then((response) => response.json())
		.then((data) => {
			this.setState({userData : data}) 
			console.log(this.state.userData)
		})
	}  

	render() { 
		return (
			<div>
				<div>
					<h1>Welcome {this.state.userData.firstName}!</h1>
					<img src={this.state.userData.img} />
					<h3>Bio:</h3>
					<p>{this.state.userData.bio}</p>
					<h3>Update Profile: </h3>
					<UpdateProfile />
					<h3>
						View the <Link to={'/directory'}>Midwife Directory</Link>
					</h3>
				</div>
			</div>
		)}
	
}
