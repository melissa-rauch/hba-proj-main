
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const NavLink = window.ReactRouterDOM.NavLink;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect;

const Registration = window.Registration;
const Login = window.Login;
const Midwife = window.Midwife;
const Directory = window.Directory;
const User = window.User;
const Home = window.Home;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      midwifeData : [],
      loggedIn : false,
      email: ''
    }
  }
  updateMidwifeData = (midwifeData) => {
    this.setState({midwifeData})
  }
  setLoggedIn = (email) => {
    this.setState({email: email, loggedIn: true})
  }

    render()  {
    return (
      
      <Router>
        <Switch>
        <Route 
            path="/Register"
            render={(props) => <Registration {...props} />} 
          />
        <Route 
            path="/login"
            render={(props) => <Login {...props} />} 
          />
          <Route 
            path="/midwife/:mw_id"
            render={(props) => <Midwife {...props} baby={'Waaaaaaaa'}/>} 
          />
          <Route
            path="/directory"
            render={() => <Directory midwifeData={this.state.midwifeData} updateMidwifeData={this.updateMidwifeData} />}
          />
          <Route 
            path="/user/:user_id"
            render={(props) => <User {...props} />}
          />
          <Route 
            path="/"
            render={() => <Home setLoggedIn={this.setLogggedIn} />}
            />
        </Switch>
       </Router>
    
    )
  }

}
ReactDOM.render(<App />, document.querySelector('#root'));

