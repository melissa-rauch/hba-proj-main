class Login extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			email: '',
			password: '',
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password
		}

		fetch('/api/login', {
			method: 'post',
			body: JSON.stringify(formData)
		})
		.then((response) => response.json())
		.then((data) => {
			if (data === "Invalid") {
				alert('Invalid email or password, please try again.');
			
			} else {
				this.props.setUserData(data);
				this.props.setLocalStorage(data.user_id);
				this.props.setLoggedIn(data.user_id);
				
			}
		});
		this.setState({
			email: '',
			password: ''
		})
	};

	render() {

		return (
		<div>	
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<br />
					<h2>Users Log in here:</h2>
					<div className="form-row">
						<div className="form-group col-md-2">
							<label forhtml="inputUserEmail">Email</label>
							<input
								type="email"
								className="form-control"
								id="inputUserEmail"
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
								id="inputUserPW"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-dark">Log In</button>
				</form>
			</div>
			<div>
				<UserReg setLoggedIn={this.props.setLoggedIn}/>
			</div>
		</div>
		);
	}
}
