import React from 'react';
import ReactDom from 'react-dom';
import Component from './components/mycomponent'

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

ReactDom.render(<App/>, document.getElementById('app'));