

function Login() {
  const goHome = () => {
    window.location = '/home'
  }
  const goDir = () => {
    window.location = '/directory'
  }
  
    return (
    
    <div>
      <div>Hi I'm Melissa!</div>

      <button onClick={goHome}>Login</button>

      <div>View the Directory of Midwives!</div>
      <button onClick={goDir}>Click Here</button>

    </div>

    )
  }


ReactDOM.render(<Login />, document.querySelector('#login'));

