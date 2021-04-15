class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'checkout',
      name: '',
      email: '',
      password: '',
      address: '',
      lineTwo: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZip: '',
      token: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.init = this.init.bind(this);
    this.completePurchase = this.completePurchase.bind(this);
  }

  nextPage () {
      if (this.state.page === 'checkout') {
        this.setState({page: 'F1'});
      } else if (this.state.page === 'F1') {
        this.setState({page: 'F2'});
      } else if (this.state.page === 'F2') {
        this.setState({page: 'F3'});
      } else if (this.state.page === 'F3') {
        this.setState({page: 'summary'});
      }
  }

  handleChange (event) {
   this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    axios.post('http://localhost:1111/checkout', this.state)
    .then((response) => {
      this.nextPage();
    });
  }

  completePurchase () {
    this.setState({
      page: 'checkout',
      name: '',
      email: '',
      password: '',
      address: '',
      lineTwo: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZip: '',
      token: ''
    });
    alert('PURCHASE SUCCESSFUL!');
  }

  init () {
    axios.get('http://localhost:1111/session')
    .then((response) => {
      this.setState({token: response.data});
      this.nextPage();
    })
  }

  render () {
    if (this.state.page === 'checkout') {
      return(
       <button onClick={this.init}>checkout</button>
      )
    }
    if (this.state.page === 'F1') {
      return(
        <div>
       <form onSubmit={this.handleSubmit}>
         <label>Name: </label>
         <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/> <br></br>
         <label>Email: </label>
         <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/> <br></br>
         <label>Password: </label>
         <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleChange}/> <br></br>
         <input type="submit" value="NEXT" />
       </form>
        </div>
      )
    }
    if (this.state.page === 'F2') {
      return(
        <div>
       <form onSubmit={this.handleSubmit}>
         <label>Address: </label>
         <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange}/> <br></br>
         <label>Address line 2 (optional): </label>
         <input type="text" name="lineTwo" id="lineTwo" value={this.state.lineTwo} onChange={this.handleChange}/> <br></br>
         <label>City: </label>
         <input type="text" name="city" id="city" value={this.state.city} onChange={this.handleChange}/> <br></br>
         <label>State: </label>
         <input type="text" name="state" id="state" value={this.state.state} onChange={this.handleChange}/> <br></br>
         <label>Zipcode: </label>
         <input type="text" name="zip" id="zip" value={this.state.zip} onChange={this.handleChange}/> <br></br>
         <input type="submit" value="NEXT" />
       </form>
        </div>
      )
    }
    if (this.state.page === 'F3') {
      return(
        <div>
       <form onSubmit={this.handleSubmit}>
         <label>Credit Card: </label>
         <input type="text" name="creditCard" id="CreditCard" value={this.state.creditCard} onChange={this.handleChange}/> <br></br>
         <label>Expiration: </label>
         <input type="text" name="expiration" id="expiration" value={this.state.expiration} onChange={this.handleChange}/> <br></br>
         <label>CVV: </label>
         <input type="text" name="cvv" id="cvv" value={this.state.cvv} onChange={this.handleChange}/> <br></br>
         <label>Billing Zipcode: </label>
         <input type="text" name="billingZip" id="billingZip" value={this.state.billingZip} onChange={this.handleChange}/> <br></br>
         <input type="submit" value="NEXT" />
       </form>
        </div>
      )
    }
    if (this.state.page === 'summary') {
      return(
        <div>
      Name: {this.state.name} <br />
      Email: {this.state.email} <br />
      Password: {this.state.password} <br />
      Address: {this.state.address} <br />
      Address line two: {this.state.lineTwo} <br />
      City: {this.state.city} <br />
      State: {this.state.state} <br />
      Zip Code: {this.state.zip} <br />
      Credit Card:{this.state.creditCard} <br />
      Expiration: {this.state.expiration} <br />
      cvv: {this.state.cvv} <br />
      Billing Zipcode: {this.state.billingZip} <br />
      <button onClick={this.completePurchase}>COMPLETE PURCHASE</button>
        </div>
      )
    }

  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
