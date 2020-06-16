class Midwife extends React.Component {
	render() {
		return (
			<div>
				<div className="midwifeProfile">
					<h1>{this.props.location.state.name}</h1>
					<img src={this.props.location.state.img} />
					<h3>Counties Served:</h3>
					<p>{this.props.location.state.counties}</p>
					<h3>Bio:</h3>
					<p>{this.props.location.state.bio}</p>
					<a href={this.props.location.state.website}>View Website</a>
					<br />
					<Link to={'/directory'}>Back to Directory</Link>
				</div>
			</div>
		);
	}
}
