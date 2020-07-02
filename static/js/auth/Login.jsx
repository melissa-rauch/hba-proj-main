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
				<div id="tron" className="jumbotron">
					<h1 className="display-4">Welcome!</h1>
					<p id="tron-sub-text" className="lead">One more step to finding your midwife, please log in or register below.</p>
					<hr class="my-4"/>
					<form onSubmit={this.handleSubmit}>
								<h2>Log in:</h2>
								<div className="form-row">
									<div className="form-group col-sm">
										<input
											type="email"
											className="form-control"
											id="inputUserEmail"
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
											id="inputUserPW"
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
				</div>
				<div className="container" style={{paddingTop:"50px"}}>

				</div>
					
				
				<div>
					<UserReg setLoggedIn={this.props.setLoggedIn}/>
				</div>
			</div>
		);
	}
}
