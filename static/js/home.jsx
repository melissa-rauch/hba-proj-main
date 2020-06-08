const Link =  window.ReactRouterDOM.Link;

function Home() {
  const [dogName, setDogName] = React.useState("Lassie")

    const fetchRumo = () => {
        return fetch('/demoapi')
          .then((response) => response.json())
          .then(data => setDogName(data.Dog))
      }

  return (
    <div>
      <div>User Profile</div>
      <Link to="/user">Login</Link>
      <p>
      <div>Directory of Midwives</div>
      <Link to="/directory">View</Link>
      </p>
      <div>The dog's name is {dogName}</div>
      <button onClick={fetchRumo}>Click Me</button>
    

    </div>
    )
}

   

