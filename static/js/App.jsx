
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect;

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
    this.updateMidwifeData = this.updateMidwifeData.bind(this)
    this.setLoggedIn = this.setLoggedIn.bind(this)
  }
  updateMidwifeData(midwifeData) {
    this.setState({midwifeData})
  }
  setLoggedIn(email) {
    this.setState({userID: userId, loggedIn: true})
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

