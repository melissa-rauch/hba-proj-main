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
					<div id="tron" className="jumbotron">
						<h1 className="display-4">Welcome {this.state.midwifeData.name}!</h1>
						<p id="tron-sub-text" className="lead">{this.state.midwifeData.creds}</p>
						<hr className="my-4"/>
						<p id="tron-sub-text">Everyday you make an incredible contribution to the world, you are appreciated!</p>
						{/* <a className="btn-lg btn-dark" href="#" role="button">Click here!</a> */}
					</div>
				</div>
				<div className="container">
					
				</div>
				<div className="container">
					<div className="row" id="grid-2">
						<img src={this.state.midwifeData.img} className="rounded"/>
						<div id="mw-info" className="card">
							<div className="col">
								<div id="mw-info" className="container">
									<h2 className="card-title" >Profile Info</h2>
									<br />
									<h5 className="card-text">Counties you serve</h5>
									<p className="card-text">{this.state.midwifeData.counties}</p>
									<h5 className="card-text">Birth Setting</h5>
									<p className="card-text">{this.state.midwifeData.location}</p>
									<h5 className="card-text">Service Features</h5>
									<p className="card-text">{this.state.midwifeData.services}</p>
									<h5 className="card-text" >Your Contact Info</h5>
									<p className="card-text">{this.state.midwifeData.phone}</p>
									<p className="card-text">{this.state.midwifeData.website}</p>
									<p className="card-text">{this.state.midwifeData.address}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<h5 className="card-text" id="left-text">Your Bio</h5>
						<p className="card-text">{this.state.midwifeData.bio}</p>
						<br />
						<button className="btn-dark btn-md ">Update Bio</button>
						<br />
					</div>
				</div>
				<div id="mw-footer" className="container">
						<div className="card text-center">
							<div className="card-header">
							We keep your information safe!
							</div>
								<div className="card-body">
									<h5 className="card-title">We will never share your contact information with the public.</h5>
									<p className="card-text">  To view your public profile </p>
									<Link to={{pathname: `/midwife/${this.state.midwifeData.mwId}`}} className="btn-dark btn-lg" >Click here
								</Link>
								</div>
							</div>
				</div>
			</div>
		)}
	
}