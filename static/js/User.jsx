class User extends React.Component {
	constructor() {
		super()
	}
	render() { 
		return (
			<div>
				<div>
					<h1>Welcome {this.props.userData.first_name}!</h1>
					<img src={this.props.userData.img} />
					<h3>Bio:</h3>
					<p>{this.props.userData.bio}</p>
					<h3>Update Profile: </h3>
					<UpdateProfile />
					<h3>
						View the <Link to={'/directory'}>Midwife Directory</Link>
					</h3>
				</div>
			</div>
		)}
	
}
