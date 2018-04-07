import React from 'react';
import Checkout from './Checkout';
import UserDetails from './UserDetails';
import Address from './Address';
import CreditCard from './Creditcard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'checkout'
    }
  }

  componentWillMount(){

  }

  changeView(view){

    this.setState({page: view});
  }

  render () {

    //conditionally render component
    const componentType = {
      checkout: <Checkout changeView={this.changeView.bind(this)}/>,
      userDetails: <UserDetails changeView={this.changeView.bind(this)}/>,
      address: <Address changeView={this.changeView.bind(this)}/>,
      creditCard: <CreditCard />
    }
   

    return (<div className="checkout">
              <div> 
                <div className="title">
                  <h1>Fartstacart Checkout App</h1>
                </div>
                {componentType[this.state.page]} 
              </div> 
            </div>);
  }
}

export default App;