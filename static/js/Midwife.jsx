class Midwife extends React.Component {
	constructor(props) {
		super(props);

	}
	getMidwife = () => {
		for (const midwife of this.props.midwifeData) {
			if (midwife.mwId == this.props.match.params.mwId) {
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
			mwId: this.props.match.params.mwId
		}

		fetch('/api/add-fav', {
			method: 'post',
			body: JSON.stringify(submitData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === 'Valid') {
					alert('Midwife added to your favorites!');
					// $('#myModal').on('shown.bs.modal', function () {
					// 	$('#myInput').trigger('focus')
					//   })
				} else {
					alert('Sorry, only registered users can to save to favorites.');
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
					<div className="jumbotron">
						<h1 className="display-4">{midwife.name}</h1>
						<p className="lead">{midwife.creds}</p>
						<hr className="my-4"/>
						<p>Service features include: {midwife.services}</p>
						<button className="btn btn-primary btn-md btn-black" onClick={this.handleChange}>Save to Favorites</button>
					</div>
				</div>
				<div className="container">
					<div className="row" id="grid-2">
						<img src={midwife.img} className="rounded"/>
						<div className="col">
						<h3>{midwife.name}</h3>
						<h6>{midwife.creds}</h6>
						<br />
						<h4>Counties Served:</h4>
						<p>{midwife.counties}</p>
						<h4>Birth Setting:</h4>
						<p>{midwife.location}</p>
						<h4>Service Features:</h4>
						<p>{midwife.services}</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
					<hr className="my-4"/>
						<p>{midwife.bio}</p>
					</div>
				</div>
				<br />
				<button className="btn btn-primary btn-md btn-black" onClick={this.handleChange}>Save to Favorites</button>
				<br />
				<Link to={'/directory'}>Back to Directory</Link>
				</div>
			</div>
		);
	}
}