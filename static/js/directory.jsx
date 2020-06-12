
const Link =  window.ReactRouterDOM.Link;
class MidwifeProfile extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
    
    <div className="midwifeDetail">
      <img src={this.props.img}/>
      <h2>{this.props.name}</h2>
      <h3>Counties Served: </h3>
      <p>{this.props.counties}</p>
      <h3>Bio: </h3>
      <p>{this.props.bio}</p>
      <h3>Website: </h3>
      <p>{this.props.website}</p>
      <Link to="/">Back to Login</Link>
    </div>
    )
  }
}

class Directory extends React.Component { 
  constructor() {
    super()
    this.state = {
      value : '',
    }
  }
  
  componentDidMount() {
    // this.setState({value : '?'})
    fetch('/api/midwives')
    .then((response) => response.json())
    .then(data => {
      this.setState({
        value : data
      })
    })
  }

  render() {
    const midwives = this.state.value
    const listMidwives = []

    for (let i = 0; i<= midwives.length; i++) { 

      if (midwives[i]) {

        listMidwives.push(
          <MidwifeProfile 
            img={midwives[i]["img"]}
            name={midwives[i]["name"]}
            counties={midwives[i]["counties"]}
            email={midwives[i]["email"]}
            id={midwives[i]["mw_id"]}
            bio={midwives[i]["bio"]}
            address={midwives[i]["address"]} />
        )
      }
    }

  return (
    <div>
      <h1>Directory of Midwives</h1>
      <div>{listMidwives}</div>      
    </div>
    );
  }
}

            

// class MidwifeRow extends React.Component {
//   render() {
//     const midwife = this.props.midwife
  
//   return (
//     <tr>
//       <td>{midwife.name}</td>
//       <td>{midwife.counties}</td>
//     </tr>
//   )
//   }   
// }

// class MidwifeTable extends React.Component {
//   render() {
//     const rows = [];
//     let lastMidwife = null;

//     this.props.midwives.forEach((midwives) => {
//       if (midwives.midwife !== lastMidwife) {
//         rows.push(
//           <MidwifeRow
//             midwife={midwives.midwife} />
//         )
//       }
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Midwives</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     )
//     })
//   }
// }


