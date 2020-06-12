
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
      midwifeData : []
      //put isLoggedIn here :
    }
    this.updateMidwifeData = this.updateMidwifeData.bind(this)
  }
  updateMidwifeData(midwifeData) {
    this.setState({midwifeData})
  }
  //logIn Function here

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
            path="/user"
            render={() => <User />}
          />
          <Route 
            path="/"
            render={() => <Home />}
          />
        </Switch>
       </Router>
    
    )
  }

}
ReactDOM.render(<App />, document.querySelector('#root'));

