const Link = window.ReactRouterDOM.Link;
class MidwifePreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { mwId, creds, name, email, phone, website, counties, location, services, address, bio, img} = this.props.midwife
		
		return (
			<div>
                <div className="card" style={{ width: '24rem' }}>
                    <img src={img} className="card-img-top"/>
                    <div className="card-body">
                        <h5>{name}</h5>
                        <h6>{creds}</h6>
                        <Link to={{pathname: `/midwife/${mwId}`}} className="btn btn-dark btn-sm">View Profile
                        </Link>
                    </div>
                </div>
			</div>
		);
	}
}