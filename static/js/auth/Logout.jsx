const Redirect = window.ReactRouterDOM.Redirect;

class Logout extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        this.props.setLoggedOut()
        window.localStorage.clear()

        return(
            <Redirect to='/'/>
        )    
    }
}