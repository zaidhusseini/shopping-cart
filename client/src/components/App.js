import React from 'react';
import Component from './Component'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){

  }

  render () {
    return (<div> 
              Start Kit App!
              <Component />
            </div>);
  }
}

export default App;