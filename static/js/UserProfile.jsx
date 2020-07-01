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
				
				<div id="tron" className="jumbotron">
						<h1 className="display-4">Welcome {this.state.userData.firstName}!</h1>
						<hr className="my-4"/>
						<p>Congratulations on this incredible adventure you're embarking on!  We believe there is a midwife for every person, let us help you find yours!</p>
				</div>
				<div className="container">
					<div className="card">
						<div className="row no-gutters">
							<div className="col">
								<img className="card-img" src={this.state.userData.img} />
							</div>
							<div className="col">
								<div className="card-body">
									<h2 className="card-title">Profile Info</h2>
									<br />
									<h5 className="card-text" >Name</h5>
									<p className="card-text">{this.state.userData.firstName} {this.state.userData.lastName}</p>
									<h5 className="card-text" >Bio</h5>
									<p className="card-text">{this.state.userData.bio}</p>
									<h5 className="card-text">Address</h5>
									<p className="card-text">{this.state.userData.address}</p>
									<h5 className="card-text" className="card-text">Email</h5>
									<p className="card-text">{this.state.userData.email}</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<UserFavorites key={this.state.userData.user_id}/>
					</div>
				</div>
				
					
			</div>
				
				

			
			
		)}
	
}
