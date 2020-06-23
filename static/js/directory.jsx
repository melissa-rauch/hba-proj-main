const Link = window.ReactRouterDOM.Link;
class MidwifePreview extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { mw_id, name, email, website, counties, address, bio, img} = this.props.midwife
		return (
			<div>
				<img src={img} />
				<h2>{name}</h2>
				<h3>Counties Served: </h3>
				<p>{counties}</p>
				<Link to={{pathname: `/midwife/${mw_id}`}}>
					View Profile
				</Link>
			</div>
		);
	}
}

class Directory extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		if (this.props.midwifeData.length === 0) {
			fetch('/api/midwives').then((response) => response.json()).then((data) => {
				this.props.updateMidwifeData(data);
			});
		}
		
	}

	render() {
		const listMidwives = this.props.midwifeData.map((midwife) => 
			<MidwifePreview midwife={midwife} key={midwife.mw_id} />);

		return (
			<div>
				<h1>Directory of Midwives</h1>
				<div>{listMidwives}</div>
			</div>
		);
	}
}