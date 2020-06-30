
class SMSForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '+15102820575',
        name:'',
        phone: '',
        email:'',
        due:'',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    
  }

  onSubmit(event) {
    const phone = this.props.midwifePhone
    console.log(phone)
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: true,
            message: {
              to: '',
              name:'',
              phone: '',
              email:'',
              due:'',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
        
      }
      );
  }
  
  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  render() {
 
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
      
      <label htmlFor="inputSMS">Request a consult!</label>  
        <div id="inputSMS" className="form-group">
          <label htmlFor="inputName">Your Name</label>
          <input
            name="name"
            id="inputName"
            className="form-control"
            value={this.state.message.name}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="form-group"> 
        <label htmlFor="inputPhone">Phone</label>
          <input
            name="phone"
            id="inputPhone"
            className="form-control"
            value={this.state.message.phone}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="form-group"> 
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            value={this.state.message.email}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="form-group"> 
          <label htmlFor="inputDue">Due Date</label>
          <input
            name="due"
            className="form-control"
            id="inputDue"
            value={this.state.message.due}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="form-group" rows="3"> 
          <label htmlFor="inputMessage">Message</label>
          <textarea
            name="body"
            placeholder="Leave your message here"
            className="form-control"
            id="inputMessage"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div>
        <button className="btn btn-dark" type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
    );
  }
}
