class User extends React.Component {

  render() {
    console.log(this.props)
    return (
    
    <div>
      <h1>This is the User's Logged-In Page</h1>
      <h2>{this.props.userData.name}</h2>
      <img src={this.props.userData.img} />
      <p>{this.props.userData.bio}</p>
    </div>
    
    )
  }
}


