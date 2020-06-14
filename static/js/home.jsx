
const Link =  window.ReactRouterDOM.Link;

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();

    const logInData = {
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/login', {
      method:'post',
      body: JSON.stringify(logInData)
    })
    .then(response => response.json())
    .then(data => {
      this.props.setLoggedIn(data)
    })
    this.setState({
      email : email,
      password : password
    })
  }

  render() {

    return (
      <div>
        <h1><img src="/static/img/home.jpeg"></img></h1>
        <h1>Welcome to Babycatcher</h1>
        <h2>Lets find you a Midwife!</h2>
        <p>Please log in:</p>
          <form onSubmit={this.handleSubmit}> 
            <input 
              type='text'
              name='email'
              placeholder='email'
              onChange={this.handleChange}
              />
              <br />
            <input
              type='text'
              name='password'
              placeholder='password'
              onChange={this.handleChange}
              />
              <br />
            <input type='submit'/>
          </form>

        <h3>...or preview the <Link to="/directory">directory</Link></h3>
      </div>
    )
  }
}      