
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect;

const UserLocation = window.UserLocation;
const Directory = window.Directory;
const Midwife = window.Midwife;
const User = window.User;
const Home = window.Home;

function App() {

    return (
      <Router>
        <Switch>
          <Route path="/directory">
              <Directory />
          </Route>
          <Route path="/midwife">
              <Midwife />
          </Route>
          <Route path="/user">
              <User />
          </Route>
          <Route path="/">
              <Home />
          </Route>

        </Switch>

       </Router>
    
    )
  }


ReactDOM.render(<App />, document.querySelector('#root'));

