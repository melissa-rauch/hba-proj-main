
// import { midwives } from "./components/Midwives.jsx"


class Directory extends React.Component { 
  constructor() {
    super()
    this.state = {
      value : "?"
    }
  }
  componentDidMount() {
    this.setState({value : "?"})
    fetch('/directory')
    .then((response) => response.json())
    .then(data => {
      this.setState({
        value : data
      })
    })
  }
  render() {
    const midwives = this.state.value.data
  
  return (
  
    <div>
      <h1>Directory of Midwives</h1>
      <p>{midwives}</p>
    </div>

    );
  }
}

