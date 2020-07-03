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
				<div id="tron" className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Directory of Midwives</h1>
						<br />
						<p id="tron-sub-text" className="lead">Our directory currently features SF/Bay Area midwives, but we plan to expand our reach soon.</p>
					</div>
		  		</div>
				<div className="container">
					<div id="center-form" className="form-group">	
						<form onSubmit={this.handleSubmit}>
							<label id="tron-sub-text">
								Filter by county
								<br />
								<select className="form-control form-control-sm" value={this.state.value} onChange={this.handleChange} >
									<option value='' defaultValue>select county</option>
									<option value='Alameda' >Alameda</option>
									<option value='Contra Costa' >Contra Costa</option>
									<option value='Marin' >Marin</option>
									<option value='San Francisco' >San Francisco</option>
									<option value='San Mateo' >San Mateo</option>
									<option value='Solano' >Solano</option>
								</select>
							</label>
						</form>
					</div>
				</div>	
				<div  className="container">
					<div id="grid" className="row">
					{selectedMidwives}
					</div>
				</div>
			</div>
		);
	}
}