
class SMSForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
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
    console.log(this.props.midwifePhone)
  }

  onSubmit(event) {
    const phone = this.props.midwifePhone
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
            submitting: false,
            message: {
              to: 'phone',
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
        <div id="inputSMS" className="sms-form div">
          <label className="sms-form label" htmlFor="inputName">Your Name</label>
          <input
            name="name"
            id="inputName"
            className="sms-form input"
            value={this.state.message.name}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="sms-form div"> 
        <label className="sms-form label" htmlFor="inputPhone">Phone</label>
          <input
            name="phone"
            id="inputPhone"
            className="sms-form input"
            value={this.state.message.phone}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="sms-form div"> 
          <label className="sms-form label" htmlFor="inputEmail">Email</label>
          <input
            type="email"
            name="email"
            className="sms-form input"
            id="inputEmail"
            value={this.state.message.email}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="sms-form div"> 
          <label className="sms-form label" htmlFor="inputDue">Due Date</label>
          <input
            name="due"
            className="sms-form input"
            id="inputDue"
            value={this.state.message.due}
            onChange={this.onHandleChange}
          />
        </div>
        <div className="sms-form div" rows="3"> 
          <label className="sms-form label" htmlFor="inputMessage">Message</label>
          <textarea
            name="body"
            placeholder="Leave your message here"
            className="sms-form textarea"
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
