
const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
// const Link =  window.ReactRouterDOM.Link;
// const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect;


const Directory = window.Directory;
const User = window.User;
const Home = window.Home;

class App extends React.Component{
  constuctor() {
    
  }
    render()  {
    return (
      
      <Router>
        <Switch>
          <Route path="/directory">
              <Directory />
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

}
ReactDOM.render(<App />, document.querySelector('#root'));

