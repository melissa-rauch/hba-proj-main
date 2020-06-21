const Redirect = window.ReactRouterDOM.Redirect;

class MidwifeLogin extends React.Component {
	constructor() {
		super()
		
		this.state = {
			email: '',
			password: '',
			midwifeData: {},
			mwId: '',
			loggedIn: false
		};
	}
	setLocalStorage(mwId) {
		localStorage.setItem('mwId', JSON.stringify(mwId));
	}		
	setloggedIn = (mwId) => {
		this.setState({mwId: mwId, loggedIn: true})
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

		fetch('/api/midwife-login', {
			method: 'post',
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data['email'] === this.state.email && data['password'] === this.state.password) {
					this.setState({midwifeData: data})
					this.setLocalStorage(data.mwId)
					this.setloggedIn(data.mwId);
					
					// <Redirect 
					// 	to={{pathname: `/midwife-profile${localStorage.getItem("mwId")}`}}
					// 	midwifeData = {this.state.midwifeData}>
					// </Redirect>

				}else {
					alert('Invalid email or password, please try again.');
				}
			});
	};

	render() {

		return (
			<div>
				<h1>Welcome!</h1>
				<br />
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
