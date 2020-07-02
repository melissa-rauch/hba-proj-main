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
		console.log(this.state.password)
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
				<div id="tron" class="jumbotron">
					<h1 class="display-4">Welcome!</h1>
					<p class="lead">So glad you're here, please log in or register below.</p>
					<hr class="my-4"/>
					<form onSubmit={this.handleSubmit}>
						<h2>Midwife Log in:</h2>
						<div className="form-row">
							<div className="form-group col-sm">
								<input
									type="email"
									className="form-control"
									id="inputMWEmail"
									name="email"
									placeholder="Email"
									value={this.state.email}
									onChange={this.handleChange}
									required
								/>
							</div>
							<div className="form-group col-sm">
								<input
									type="password"
									className="form-control"
									id="inputMWPW"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleChange}
									required
								/>
							</div>
							<button type="submit" className="btn btn-dark" style={{height:"40px"}}>  Log In  </button>
						</div>
							
					</form>
					<br />
				</div>
					<div>
						<MidwifeReg props={this.state} />
					</div>
				
			</div>
		);
	}
}
