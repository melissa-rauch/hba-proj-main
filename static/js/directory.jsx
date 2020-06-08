

function Directory() {
  
  const [dogName, setDogName] = React.useState("Lassie")

    const fetchRumo = () => {
        return fetch('/demoapi')
          .then((response) => response.json())
          .then(data => setDogName(data.Dog))
      }  
  
  
  
  
  
  
  useEffect(() => {
    fetch('/directory').then(response => 
      response.json().then(data => {
        console.log(data);
      })
    );
    }, []);


    return (
    
    <div>
      <div>{viewMidwives}</div>
      <button onClick={midwifeDirectory}>Click Me</button>
    </div>

    )
  }

