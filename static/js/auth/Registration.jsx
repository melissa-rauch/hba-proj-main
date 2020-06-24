class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			address: '',
			bio: '',
			img: ''
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			bio: this.state.bio,
			img: this.state.img

		}

		fetch('/api/register', {
			method: 'post',
			body: JSON.stringify(formData)
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === 'Valid') {
					alert("Account created!  Please log in.");
				} else {
					alert('Invalid entry, please try again.');
				}
			});
	};
	render() {
		return (
			<div>
				<br />
				<form onSubmit={this.handleSubmit} encType="multipart/form-data">
					<h3>Don't have an Account? Please Register:</h3>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>  Email
					<br />
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>  Set password
                    <br />
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={this.handleChange}
						required
					/>  First Name
                    <br /> 
					<input
						type="text"
						name="lastName"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={this.handleChange}
						required
					/>  Last Name
                    <br /> 
					<input
						type="text"
						name="address"
						placeholder="address"
						value={this.state.address}
						onChange={this.handleChange}
						required
					/>  Address
                    <br /> 
					<p>Say a little about yourself...</p>
                    <textarea
						type="textarea"
						name="bio"
						placeholder="About me..."
						value={this.state.bio}
						onChange={this.handleChange}
					/>
					<br />
					<input
						id="image-upload"
						type="file"
						name="image-upload"
						value={this.state.img}
						onChange={this.handleChange}
					/>
                    <br /> 
					<UploadPhoto />
					<button type="submit">Register</button>
				</form>
					
			</div>
		);
	}
}
