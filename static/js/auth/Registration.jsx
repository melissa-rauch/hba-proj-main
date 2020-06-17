class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
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
		};

		fetch('/api/register', {
			method: 'post',
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === 'Yes') {
					this.props.setLoggedIn(this.state.email);
				} else {
					alert('Invalid entry, please try again.');
				}
			});
	};
	render() {
		return (
			<div>
				<br />
				<form onSubmit={this.handleSubmit}>
					<h3>Don't have an Account? Please Register:</h3>
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
					<button type="submit">Register</button>
				</form>
			</div>
		);
	}
}
