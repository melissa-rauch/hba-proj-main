
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const NavLink = window.ReactRouterDOM.NavLink;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

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
      userData : [],
      email: ''
    }
  }
  updateMidwifeData = (midwifeData) => {
    this.setState({midwifeData})
  }
  setLoggedIn = (email) => {
    this.setState({email: email, loggedIn: true})
  }
  setUserData = (userData) => {
    this.setState({userData})
    
  }
  

    render()  {
 
    return (
      
      <Router>
        <Switch>
          <Route 
            path="/midwife/:mw_id"
            render={(props) => <Midwife {...props} baby={'Waaaaaaaa'}/>} 
          />
          <Route
            path="/directory"
            render={() => <Directory midwifeData={this.state.midwifeData} updateMidwifeData={this.updateMidwifeData} />}
          />
          <Route 
            path="/user">
              <User userData={this.state.userData}/>        
           
          </Route>
          <Route 
            path="/">
              {this.state.loggedIn ? 
              <Redirect to='/user' /> :
              <Home setLoggedIn={this.setLoggedIn} setUserData={this.setUserData} userData={this.state.userData} />
              }
            </Route>
        </Switch>
       </Router>
    
    )
  }

}
ReactDOM.render(<App />, document.querySelector('#root'));

