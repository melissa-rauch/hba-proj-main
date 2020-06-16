

class User extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    
    <div>
      <h1>This is the User's Logged-In Page</h1>
      <h2>{this.props.user.name}</h2>
    </div>
    
    )
  }
}


