class NavBar extends React.Component{
	constructor(props) {
		super(props)
		
	}

    render() {
        if (this.props.loggedIn || this.props.mwLoggedIn)  {
            return(
                <div>
                    <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
                        <a id="navbar-b-text" className="navbar-brand" href="/">Babycatcher</a>
                    <div className="navbar-nav" id="#navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a id="navbar-text" className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a id="navbar-text" className="nav-link" href="/directory">View Directory</a>
                            </li>
                            <li className="nav-item">
                                <a id="navbar-text" className="nav-link" href="/logout">Log out</a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            )
        } else {
        return (
            <div> 
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a id="navbar-b-text" className="navbar-brand" href="/">Babycatcher</a>
                   
                <div className="navbar-nav" id="#navbarSupportedContent">
                    <ul className="navbar-nav">
                        
                        <li id="navbar-text" className="nav-item">
                            <a id="navbar-text" className="nav-link" href="/directory">View Directory</a>
                        </li>
                        <li id="navbar-text" className="nav-item dropdown">
                            <a id="navbar-text" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login/Register
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/user-login">Babymaker</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/midwife-login">Babycatcher</a>
                            </div>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
        }
    }    
}
