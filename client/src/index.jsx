import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import '../dist/styles.css';

ReactDom.render(<App/>, document.getElementById('app'));