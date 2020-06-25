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
	};

	render() {

		return (
			<div>
				<br />
				<form onSubmit={this.handleSubmit}>
					<h2>Users Log in here:</h2>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<br />
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<br />
					<button type="submit">Log In</button>
				</form>
			</div>
		);
	}
}
