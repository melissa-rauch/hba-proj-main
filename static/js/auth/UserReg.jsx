
class UserReg extends React.Component {
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
		this.setState({
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			address: '',
			bio: '',
			img: ''
		})
	};
	render() {
		return (
			<div className="container">
				<br />
				<br />
				<div className="card">
					<div className="card-body">
							<form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
							<h2>Don't have an account yet?</h2>
							<h5>No worries, you can register here:</h5>
							<div className="form-row">
								<div className="form-group col-md-4">
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
									<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
								</div>
								<div className="form-group col-md-4"> 
									<label forhtml="inputUserPW">Set Password</label>
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
							<h5>About you:</h5>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label forhtml="inputUserFirst">First Name</label>
									<input
										type="text"
										className="form-control"
										id="inputUserFirst"
										name="firstName"
										value={this.state.firstName}
										onChange={this.handleChange}
										required
									/>  
								</div>
								<div className="form-group col-md-6">
									<label forhtml="inputUserLast">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="inputUserLast"
										name="lastName"
										value={this.state.lastName}
										onChange={this.handleChange}
										required
									/>  
								</div>
							</div> 
							<div className="form-group">
								<label forhtml="inputAddress">Address</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									name="address"
									placeholder="1234 Clement St San Francisco, CA 94118"
									value={this.state.address}
									onChange={this.handleChange}
									required
								/>  
							</div> 
							<div className="form-group">
								<label forhtml="inputBio">Say a little about yourself</label>
								<textarea
									type="textarea"
									className="form-control"
									id="inputBio"
									rows="3"
									name="bio"
									placeholder="Example: My partner and I are looking for a midwife.  We're due December 18th 2020 and live in the Inner Richmond of San Francisco.  This will be our second baby and our first was born at Kaiser Hospital without any complications."
									value={this.state.bio}
									onChange={this.handleChange}
								/>
							</div>
							{/* <div className="form-group">
								<label forhtml="inputImg">Upload your Photo</label>
								<input
									type="file"
									className="form-control"
									id="inputImg"
									name="Img"
									value={this.state.img}
									onChange={this.handleChange}
								/>
							</div> */}
							<button type="submit" className="btn btn-dark" style={{height:"40px"}}>Register</button>
						</form>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}
