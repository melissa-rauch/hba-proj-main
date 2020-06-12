
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
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = {
      email: this.state.email,
      password: this.state.password
    }
    fetch('/login', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'number') {
        this.props.setLoggedIn(data)
      } else {
        alert("Invalid")
      }
    })
    this.setState({email:'', password:''})
  }

  render() {
    return (
      <div>
        <h1><img src="/static/img/home.jpeg"></img></h1>
        
        <h1>Welcome to Babycatcher</h1>
        <h2>Lets find you a Midwife!</h2>
        <div id='login'>
          <form onSubmit={this.handleSubmit}> 
          Please Log In
            <p>        
              <input 
                  name='email'
                  type='text'
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder='email'
                  />         
            </p> 
            <p>        
              <input 
                name='password'
                type='text'
                value={this.state.password}
                onChange={this.handleChange}
                placeholder='password'
                />        
            </p> 
            <input type='submit' />
          </form>
        </div>
      <h3>...or preview the <Link to="/directory">directory</Link></h3> */}

        {/* <Link to="/user">Login</Link> */}
          
          
      </div>
      )
  }
}

  


   

