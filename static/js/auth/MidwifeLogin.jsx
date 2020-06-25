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
				<h2>Midwives log in here:</h2>
				<form onSubmit={this.handleSubmit}>
					<h3>Please log in:</h3>
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
