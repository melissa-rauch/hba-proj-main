const Redirect = window.ReactRouterDOM.Redirect;

class MidwifeLogin extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			email: '',
			password: '',
			midwifeData: {},
			mwId: '',
			mwLoggedIn: false
		};
	}
	setLocalStorage(mwId) {
		localStorage.setItem('mwId', JSON.stringify(mwId));
	}		
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password
		}

		fetch('/api/mw-login', {
			method: 'post',
			body: JSON.stringify(formData)
		})
		.then((response) => response.json())
		.then((data) => {
			
			if (data === "Invalid") {
				alert('Invalid email or password, please try again.');
			} else {
				this.setState({
					midwifeData: data,
					mwId: data.mwId});
				this.setLocalStorage(data.mwId);
				this.props.setMidwifeLoggedIn(data.mwId);
			}
		})
	};

	render() {

		return (
			<div>
				<h3>Midwife Log in:</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-row">
						<div className="form-group col-md-2">
							<label forhtml="inputMWEmail">Email</label>
							<input
								type="email"
								className="form-control"
								id="inputMWEmail"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="form-group col-md-2">
							<label forhtml="inputUserPW">Password</label>
							<input
								type="password"
								className="form-control"
								id="inputMWPW"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-dark">Log In</button>	
				</form>
				<div>
					<MidwifeReg props={this.state} />
				</div>
			</div>
		);
	}
}
