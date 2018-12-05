import React, { Component } from 'react';
import '../css/App.scss';
import Axios from 'axios';
import Add from './components/Add';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      title: '',
      description: '',
      pinned: null,
    }
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
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
        <form>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
