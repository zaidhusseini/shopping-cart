import React from 'react';
import Checkout from './Checkout';
import UserDetails from './UserDetails';
import Address from './Address';
import CreditCard from './Creditcard';
import { Icon } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'checkout',
      userInfo: {
        firstName:'',
        lastName:'',
        email:'',
        password:''
      },
      address: {
        line1:'',
        line2:'',
        city:'',
        state:'',
        zip:''
      },
      payment: {
        creditCard:'',
        expiry:'',
        cvv:'',
        zip:'',
      }

    }
  }

  handleChange(){

  }

  changeView(view){

    this.setState({page: view});
  }

  render () {

    //conditionally render component
    const componentType = {
      checkout: <Checkout changeView={this.changeView.bind(this)} nextItem={"userDetails"}/>,
      userDetails: <UserDetails changeView={this.changeView.bind(this)} nextItem={"address"}/>,
      address: <Address changeView={this.changeView.bind(this)} nextItem={"creditCard"}/>,
      creditCard: <CreditCard />
    }
   

    return (<div className="checkout">
              <div> 
                <div className="title">
                  <Icon name='thumbs up' size='big' className="logo"/>
                  <h1>Fartstacart Checkout App</h1>
                </div>
                {componentType[this.state.page]} 
              </div> 
            </div>);
  }
}

export default App;