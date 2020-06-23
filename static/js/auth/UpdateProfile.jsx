class UpdateProfile extends React.Component {
    constructor() {
        super()
        this.state = {
			first_name: '',
            last_name: '',
            address: '',
			bio: '',
			img: ''
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
			first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            bio: this.state.bio
        };
    }    
render() {
    return(
        <div>
            <br />
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						value={this.state.first_name}
						onChange={this.handleChange}
					/>
					<br />
                    <input
						type="text"
						name="last_name"
						placeholder="Last Name"
						value={this.state.last_name}
						onChange={this.handleChange}
					/>
                    <br />
                    <input
						type="text"
						name="address"
						placeholder="Address"
						value={this.state.address}
						onChange={this.handleChange}
					/>
                    <br />
                    <textarea
						type="textarea"
						name="bio"
						placeholder="About me..."
						value={this.state.bio}
						onChange={this.handleChange}
					/>
                    <br />
					<UploadPhoto />
                    <br />
                    <button onSubmit={this.handleSubmit}>Update</button>
            </form>
        </div>
    )}
}
