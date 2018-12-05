import React, { Component } from 'react';
import '../css/App.scss';
import Axios from 'axios';
import Add from './components/Add';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      pinned: false,
    }
  };

  handleTitleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      title: event.target.value
    });
  };

  handleDescriptionChange = (event) => {
    console.log(event.target.value);
    this.setState({
      description: event.target.value
    });
  };

  handleSubmit = (e) => {
    Axios.post('/insert', {
      title: this.state.title,
      description: this.state.description,
      pinned: this.state.pinned
    }).then(function (response){
      console.log(response);
    }).catch(function(error){
      console.log('Add.jsx-',error)
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            title: <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
          </label>
          <label>description: <input type="test" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}/></label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
