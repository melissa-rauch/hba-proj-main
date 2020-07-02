class UserFavorites extends React.Component {
    constructor()  {
        super()
        this.state = {
            favMidwives: []
        }
    }

    componentDidMount() {
        fetch(`/api/fav-midwives?userId=${localStorage.getItem('userId')}`)
		.then((response) => response.json())
		.then((data)=> {
			this.setState({favMidwives : data})
        })
    }
    render() {
       
        const listMidwives = this.state.favMidwives.map((midwife) => {
            return( 
                
                <div className="card" style={{ width: 'auto' }} key={midwife.mw_id} >
                    <img src={midwife.img} className="card-img-top"/> 
                    <div className="card-body">
                        <h3>{midwife.name}</h3>
                        <h6>{midwife.creds}</h6>
                        <SMSForm name={midwife.name} midwifePhone={midwife.phone} key={midwife.mw_id}/>
                    </div>
                </div> 
                      
                
            )
        })   

        return(
            <div>
                <div className="container">
                <h2 id="center-text">Your Favorites</h2>
                <br />
                    <div id="grid-2" className="row">
                        {listMidwives}
                    </div>
                <p>Visit the Midwife Directory to add to your favorites!</p>
                    <Link className="btn-dark btn-lg" to={{pathname: `/directory`}}>Directory</Link>
                </div>
                <br />
            </div>
        )
    }
}
