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

	handleChange = (event) => {

		const submitData = {
			userId: localStorage.getItem("userId"),
			mwId: this.props.match.params.mw_id
		}

		fetch('/api/add-fav', {
			method: 'post',
			body: JSON.stringify(submitData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === 'Valid') {
					alert('Midwife added to your favorites!');
				} else {
					alert('Please create an account or Log in to save to favorites');
				}
			});
	};

	render() {
		const midwife = this.getMidwife()

		if (!midwife) {
			return <div>
						<h2>Uh Oh! Looks like that page doesn't exist</h2>
						<h3>Return to <Link to='/'>homepage</Link></h3>
					</div>
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