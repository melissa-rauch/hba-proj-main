const Link = window.ReactRouterDOM.Link;
class MidwifePreview extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<img src={this.props.midwife.img} />
				<h2>{this.props.midwife.name}</h2>
				<h3>Counties Served: </h3>
				<p>{this.props.midwife.counties}</p>
				<Link
					to={{
						pathname: '/midwife/profile',
						state: {
							name: this.props.midwife.name,
							counties: this.props.midwife.counties,
							website: this.props.midwife.website,
							email: this.props.midwife.website,
							address: this.props.midwife.address,
							bio: this.props.midwife.bio,
							id: this.props.midwife.mw_id,
							img: this.props.midwife.img
						}
					}}
				>
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
		// if (!this.props.midwifeData) {
		fetch('/api/midwives').then((response) => response.json()).then((data) => {
			this.props.updateMidwifeData(data);
		});
		// }
	}

	render() {
		const midwives = this.props.midwifeData;
		const listMidwives = [];

		for (let i = 0; i <= midwives.length; i++) {
			if (midwives[i]) {
				listMidwives.push(<MidwifePreview midwife={midwives[i]} key={i} />);
			}
		}

		return (
			<div>
				<h1>Directory of Midwives</h1>
				<div>{listMidwives}</div>
			</div>
		);
	}
}
