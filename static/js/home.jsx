const Link =  window.ReactRouterDOM.Link;

function Home() {


  return (
    <div>
      <div>User Profile</div>
        <Link to="/user">Login</Link>
      
      <div>Directory of Midwives</div>
        <Link to="/directory">View</Link>
        
    </div>
    )
}

   

