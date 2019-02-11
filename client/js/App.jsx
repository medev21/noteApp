import React, { Component } from 'react';
import '../css/App.scss';
import Apis from './utils/Apis';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
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
