
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
  }

  onSubmit(event) {
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
              to: '+5102820575',
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
        <div>
          <label htmlFor="body">Message:</label>
          <br />
          <input
            name="name"
            placeholder="Your Name"
            id="name"
            value={this.state.message.name}
            onChange={this.onHandleChange}
          />
          <br />
          <input
            name="phone"
            placeholder="Your phone number"
            id="phone"
            value={this.state.message.phone}
            onChange={this.onHandleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            id="email"
            value={this.state.message.email}
            onChange={this.onHandleChange}
          />
          <br />
          <input
            name="due"
            placeholder="Due Date"
            id="due"
            value={this.state.message.due}
            onChange={this.onHandleChange}
          />
          <br />
          <textarea
            name="body"
            placeholder="Leave your message here"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div>
        <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
    );
  }
}
