import React, { Component } from 'react';
import '../css/App.scss';
import Routes from './components/Routes';

class App extends Component {

  render() {

    return (
      <div className="appContainer">
        <Routes/>
      </div>
    );
  }
}

export default App;
