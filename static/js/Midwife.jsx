
class Midwife extends React.Component {


    // componentDidMount() {

    //     const { mw_id } = this.props.match.params
    //     const { name } = this.props.location.state
        
    // }
    render() {
        return(
            <div>
                <div className="midwifeProfile">
                    <h1>{this.props.location.state.name}</h1>
                    <img src={this.props.location.state.img}/>
                    <h3>Counties Served:</h3>
                    <p>{this.props.location.state.counties}</p>
                    <h3>Bio:</h3>
                    <p>{this.props.location.state.bio}</p>
                    <h3>Website:</h3>
                    <p>{this.props.location.state.website}</p>
                    <Link to={'/directory'}>Back to Directory</Link>
                </div>
            </div>
        )
    }
} 