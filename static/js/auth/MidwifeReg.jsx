
class MidwifeReg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: '',
            address: '',
            counties: '',
            phone: '',
			bio: '',
			img: ''
		};
	}
	handleChange = (event) => {
		const {name, value, type, checked} = event.target
		type === 'checkbox' ?
			this.setState({
				[name]: checked,
			})
		:
		this.setState({
			[name]: value
		})	
	};
	handleSubmit = (event) => {
		event.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
			creds: this.state.creds,
			address: this.state.address,
			phone: this.state.phone,
			website: this.state.website,
			counties: this.state.counties,
			location: this.state.location,
			services: this.state.services,
			bio: this.state.bio
		}

		fetch('/api/mwregister', {
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
			name: '',
            address: '',
            counties: '',
            phone: '',
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
						<form onSubmit={this.handleSubmit} encType="multipart/form-data">
						<h4>Don't have an account yet?</h4>
						<h5>No worries, you can register here:</h5>
						<div className="form-row">
							<div className="form-group col-md-4">
								<label forhtml="inputUserEmail">Email</label>
								<input
									type="email"
									name="email"
									className="form-control"
									id="inputUserEmail"
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
									name="password"
									className="form-control"
									id="inputUserPW"
									value={this.state.password}
									onChange={this.handleChange}
									required
								/>  
							</div>
						</div>	
						<h5>About you:</h5>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label forhtml="inputUserName">Full Name</label>
								<input
									type="text"
									name="name"
									className="form-control"
									id="inputUserName"
									value={this.state.name}
									onChange={this.handleChange}
									required
								/>  
							</div>
							<div className="form-group col-md-6">
								<label forhtml="inputCreds">Credentials</label>
								<input
									type="text"
									name="creds"
									className="form-control"
									id="inputCreds"
									placeholder="ie Licensed Midwife"
									value={this.state.creds}
									onChange={this.handleChange}
									required
								/>  
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label forhtml="inputAddress">Address</label>
								<input
									type="text"
									name="address"
									className="form-control"
									id="inputAddress"
									placeholder="1234 Clement St San Francisco, CA 94118"
									value={this.state.address}
									onChange={this.handleChange}
									required
								/> 
							</div>
							<div className="form-group col-md-6">
								<label forhtml="inputPhone">Phone Number</label>
								<input
									type="text"
									name="phone"
									className="form-control"
									id="inputPhone"
									value={this.state.phone}
									onChange={this.handleChange}
									required
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label forhtml="inputWebsite">Website</label>
								<input
									type="text"
									name="website"
									className="form-control"
									id="inputWebsite"
									placeholder="www.yoursite.com"
									value={this.state.website}
									onChange={this.handleChange}
									required
								/>  
							</div>
							<div className="form-group col-md-6">
								<label forhtml="inputCounties">Counties you serve</label>
								<input
									type="text"
									name="counties"
									className="form-control"
									id="inputCounties"
									placeholder="ie Alameda, Contra Costa, San Francisco"
									value={this.state.counties}
									onChange={this.handleChange}
								/> 
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label forhtml="inputLocation">Birth Setting</label>	 
								<input
									type="text"
									name="location"
									className="form-control"
									id="inputLocation"
									placeholder="ie Home, Birth Center"
									value={this.state.location}
									onChange={this.handleChange}
								/> 
							</div>
							<div className="form-group col-md-6">
								<label forhtml="inputServices">Special Services</label>
								<input
									type="text"
									name="services"
									className="form-control"
									id="inputServices"
									placeholder="ie VBAC, Water Birth, Insurance Billing"
									value={this.state.services}
									onChange={this.handleChange}
									/> 
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label forhtml="inputBio">Your Bio</label>
								<textarea
									type="textarea"
									name="bio"
									className="form-control"
									id="inputBio"
									placeholder="Write your Bio here."
									value={this.state.bio}
									onChange={this.handleChange}
								/>
							</div>
						</div>	
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
