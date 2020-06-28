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
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: '28rem' }} key={midwife.mw_id} >
                                <img src={midwife.img} className="card-img-top"/> 
                                <div className="card-body">
                                    <h5>{midwife.name}</h5>
                                    <h6>{midwife.creds}</h6>
                                    <SMSForm midwifePhone={midwife.phone} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            )
        })   

        return(
            <div>
                {listMidwives}
                <p>Visit the <Link to='/directory'>midwife directory</Link> to select some favorites!</p>
            </div>
        )
    }
}
