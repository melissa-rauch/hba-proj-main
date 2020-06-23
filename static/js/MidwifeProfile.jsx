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
					<h1>Welcome {this.state.midwifeData.name}!</h1>
					<img src={this.state.midwifeData.img} />
					<h3>Bio:</h3>
					<p>{this.state.midwifeData.bio}</p>
                    <h3>Counties served:</h3>
					<p>{this.state.midwifeData.counties}</p>
                    <h3>Contact Info</h3>
					<p>Email:{this.state.midwifeData.email}</p>
					<p>Website:{this.state.midwifeData.website}</p>
					<h3>
						View the <Link to={'/directory'}>Midwife Directory</Link>
					</h3>
				</div>
			</div>
		)}
	
}