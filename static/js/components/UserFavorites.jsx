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
                <div key={midwife.mw_id}>
                    <img src={midwife.img} /> 
                    <p>{midwife.name}</p>
                    
                    <SMSForm midwifePhone={midwife.phone} />
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
