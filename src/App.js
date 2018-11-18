import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Nav from './Nav';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
