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
					<div id="tron" className="jumbotron">
						<h1 className="display-4">{midwife.name}</h1>
						<p className="lead">{midwife.creds}</p>
						<hr className="my-4"/>
						<p>Home birth, {midwife.services}</p>
						<button className="btn-lg btn-dark fas fa-heart" onClick={this.handleChange}></button>
					</div>
				</div>
				<div className="container">
					<br />
					<br />
					<br />
					<div className="row" id="grid-2">
						<img src={midwife.img} className="rounded"/>
						<div id="mw-info" className="card">
							<div className="col">
								<div id="mw-info" className="container">
								<h3 id="right-text">{midwife.name}</h3>
								<p id="right-text">{midwife.creds}</p>
								<br />
								<h5 id="right-text">Counties Served</h5>
								<p id="right-text">{midwife.counties}</p>
								<h5 id="right-text">Birth Setting</h5>
								<p id="right-text">{midwife.location}</p>
								<h5 id="right-text">Service Features</h5>
								<p id="right-text">{midwife.services}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<h5>About {midwife.name}</h5>
						<p>{midwife.bio}</p>
					</div>
					<br />
				<button className="btn-lg btn-dark fas fa-heart" onClick={this.handleChange}> to Favorite</button>
				<br />
				<br />
				<br />
				<br />
				</div>
				
			</div>
			
		);
	}
}