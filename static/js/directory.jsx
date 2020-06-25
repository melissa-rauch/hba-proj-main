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
		this.state = {
			value: ''
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
		this.setState({
			value: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		alert('You selected: ' + this.state.value)		
	}

	render() {
		const selectedMidwives = this.props.midwifeData
			.filter(mw => mw.counties.includes(this.state.value))
			.map((midwife) => <MidwifePreview midwife={midwife} key={midwife.mw_id} />);

		return (
			<div>
				<div>
					<h1>Directory of Midwives</h1>
				</div>
				<div>	
					<form onSubmit={this.handleSubmit}>
						<label>
							Filter by county
							<br />
							<select value={this.state.value} onChange={this.handleChange} >
								<option value='' defaultValue>select county</option>
								<option value='Alameda' >Alameda</option>
								<option value='Contra Costa' >Contra Costa</option>
								<option value='Marin' >Marin</option>
								<option value='San Francisco' >San Francisco</option>
								<option value='San Mateo' >San Mateo</option>
								<option value='Solano' >Solano</option>
							</select>
						</label>
						<input type="submit" value='Select' />
					</form>
				</div>	
				<div>
					{selectedMidwives}
				</div>
			</div>
		);
	}
}