import React, { Component } from 'react';
import '../css/App.scss';
import Axios from 'axios';
import Apis from './utils/Apis';
import Add from './components/Add';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      pinned: false,
      notes: [],
    }
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  };

  handleSubmit = (e) => {
    let title = this.state.title;
    let description = this.state.description;
    let pinned = this.state.pinned;

    Apis.postNote(title, description, pinned).then((response) => {
      console.log('App.jsx post note success')
    }).catch((error) => {
      console.log("App.jsx post note error - ", error)
    });
  };

  handleGetNotes = () => {
    Apis.getNotes().then((response) => {
      console.log(response.data);
      this.setState({
        notes: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount = () => {
    this.handleGetNotes();
  };

  render() {

    let notes = this.state.notes;
    return (
      <div className="App">

        <div>
          <ul>
            {notes.map((note, index) => {
              return(
                  <li key={index}>{note.title}</li>
              )
            })}
          </ul>
        </div>

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
