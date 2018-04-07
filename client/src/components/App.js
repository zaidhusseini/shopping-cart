import React from 'react';
import Checkout from './Checkout';
import UserDetails from './UserDetails';

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
          
    if (view === 'checkout'){
      this.setState({page: 'userDetails'});
    }
  }

  render () {

    //conditionally render component
    const componentType = {
      checkout: <Checkout changeView={this.changeView.bind(this)}/>,
      userDetails: <UserDetails />,
      creditCard: function(){},
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