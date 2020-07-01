const Link = window.ReactRouterDOM.Link;

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			
			<div >
				<h1 id="site-title" className="animate__animated animate__bounceInUp">babycatcher</h1>
				<img id="center-img" src="/static/img/home.jpeg" />
				 
			</div>
			
		);
	}
}
