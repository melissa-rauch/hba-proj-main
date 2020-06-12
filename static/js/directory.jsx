
const Link =  window.ReactRouterDOM.Link;
class MidwifePreview extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
    
    <div className="midwifePreview">
      <img src={this.props.midwife.img}/>
      <h2>{this.props.midwife.name}</h2>
      <h3>Counties Served: </h3>
      <p>{this.props.midwife.counties}</p>
      <Link to={`/midwife/${this.props.midwife.mw_id}`}>View Profile</Link>
    </div>
    )
  }
}

class Directory extends React.Component { 
  constructor() {
    super()
  }
  
  componentDidMount() {
    if (!this.props.midwifeData) {
      fetch('/api/midwives')
      .then((response) => response.json())
      .then(data => {
        this.props.updateMidwifeData(data)
      })
    }

  }

  render() {
    const midwives = this.props.midwifeData
    const listMidwives = []

    for (let i = 0; i<= midwives.length; i++) { 

      if (midwives[i]) {

        listMidwives.push(
          <MidwifePreview midwife={midwives[i]} />

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
// img={midwives[i]["img"]}
// name={midwives[i]["name"]}
// counties={midwives[i]["counties"]}
// email={midwives[i]["email"]}
// id={midwives[i]["mw_id"]}
// bio={midwives[i]["bio"]}
// address={midwives[i]["address"]} />
            

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


