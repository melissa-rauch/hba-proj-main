class MidwifeLogin extends React.Component {
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

		fetch('/api/midwife_login', {
			method: 'post',
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data['email'] === this.state.email && data['password'] === this.state.password) {
					this.props.setMidwifeLoggedIn(this.state.email);
					this.props.setMidwifeData(data);
				}else {
					alert('Invalid email or password, please try again.');
				}
			});
	};

	render() {

		return (
			<div>
				<br />
				<form onSubmit={this.handleSubmit}>
					<h3>Please Log In:</h3>
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
