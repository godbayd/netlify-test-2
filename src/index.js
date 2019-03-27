import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

class Index extends React.Component {
  constructor(props){super(props)};
  render(){
    return (
      <div>
        <App />
      </div>
    );
  }
};

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
