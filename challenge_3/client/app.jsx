

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
      billingZip: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nextPage () {
      if (this.state.page === 'checkout') {
        this.setState({page: 'F1'});
      } else if (this.state.page === 'F1') {
        this.setState({page: 'F2'});
      } else if (this.state.page === 'F2') {
        this.setState({page: 'F3'});
      }
  }

  handleChange (event) {
   this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit (event) {
    console.log('SUBMIT!')
    event.preventDefault();
    this.nextPage();
  }

  render () {
    if (this.state.page === 'checkout') {
      return(
       <button onClick={this.nextPage}>checkout</button>
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
       <form>
         <label>Credit Card: </label>
         <input type="text" name="creditCard" id="CreditCard" value={this.state.creditCard} onChange={this.handleChange}/> <br></br>
         <label>Expiration: </label>
         <input type="text" name="expiration" id="expiration" value={this.state.expiration} onChange={this.handleChange}/> <br></br>
         <label>CVV: </label>
         <input type="text" name="cvv" id="cvv" value={this.state.cvv} onChange={this.handleChange}/> <br></br>
         <label>Billing Zipcode: </label>
         <input type="text" name="billingZip" id="billingZip" value={this.state.billingZip} onChange={this.handleChange}/> <br></br>
         <input type="submit" value="COMPLETE PURCHASE" />
       </form>
        </div>
      )
    }

  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
