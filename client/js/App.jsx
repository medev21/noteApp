import React, { Component } from 'react';
import '../css/App.scss';
import Axios from 'axios';
import Add from './components/Add';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      pinned: null,
    }
  };

  insertNewNote = (e) => {
    Axios.post('/insert', {
      title: '',
      description: '',
      pinned: false
    }).then(function (response){
      console.log(response);
    }).catch(function(error){
      console.log('Add.jsx-',error)
    });
  };

  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
