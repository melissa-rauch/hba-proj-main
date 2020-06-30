class MidwifeProfile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			midwifeData : this.props.midwifeData
		}
	}
	
	componentDidMount() {
        
            fetch(`/api/midwife?mwId=${localStorage.getItem('mwId')}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({midwifeData : data})
            })
        
	}  

	render() { 
		return (
			<div>
				<div>
					<div className="jumbotron">
						<h1 className="display-4">Welcome {this.state.midwifeData.name}!</h1>
						<p className="lead">{this.state.midwifeData.creds}</p>
						<hr className="my-4"/>
						<p>Everyday you make an incredible contribution to the world, you are appreciated! Let us know how we can better support your work!</p>
						<a className="btn btn-primary btn-md btn-black" href="#" role="button">Click here!</a>
					</div>
				</div>
				<div>
				{/* <h1>Welcome {this.state.midwifeData.name}!</h1>
				<p>{this.state.midwifeData.creds}</p> */}
				<img src={this.state.midwifeData.img} />
				<h3>Bio:</h3>
				<p>{this.state.midwifeData.bio}</p>
				<h3>Counties served:</h3>
				<p>{this.state.midwifeData.counties}</p>
				<h3>Birth setting:</h3>
				<p>{this.state.midwifeData.location}</p>
				<h3>Special services:</h3>
				<p>{this.state.midwifeData.services}</p>
				<h3>Contact Info</h3>
				<p>Phone:{this.state.midwifeData.phone}</p>
				<p>Email:{this.state.midwifeData.email}</p>
				<p>Website:{this.state.midwifeData.website}</p>
				{/* <h3>
					View the <Link to={'/directory'}>Midwife Directory</Link>
				</h3> */}
				</div>
			</div>
		)}
	
}