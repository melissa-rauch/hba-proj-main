class Midwife extends React.Component {
	constructor(props) {
		super(props);
	}
	getMidwife = () => {
		for (const midwife of this.props.midwifeData) {
			if (midwife.mw_id == this.props.match.params.mw_id) {
				return midwife
			}
		}
	}
	componentDidMount() {
		if (this.props.midwifeData.length === 0) {
			fetch('/api/midwives').then((response) => response.json()).then((data) => {
				this.props.updateMidwifeData(data);
			});
		}
	}
	handleChange = (event) => {};
	render() {
		const midwife = this.getMidwife()

		if (!midwife) {
			return <div>BABIES!</div>
		}
		
		return (
			<div>
				<div>
					<h1>{midwife.name}</h1>
					<img src={midwife.img} />
					<h3>Counties Served:</h3>
					<p>{midwife.counties}</p>
					<h3>Bio:</h3>
					<p>{midwife.bio}</p>
					<a href={midwife.website}>View Website</a>
					<br />
					<button onClick={this.handleChange}>Save to Favorites</button>
					<br />
					<Link to={'/directory'}>Back to Directory</Link>
				</div>
			</div>
		);
	}
}
