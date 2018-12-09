import React, { Component } from 'react';
import '../css/App.scss';
import Apis from './utils/Apis';
import Notes from './components/Notes';

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
      console.log('App.jsx post note success ', response)//not outputing...
    }).catch((error) => {
      console.log("App.jsx post note error - ", error)
    });

    this.setState({
      title: '',
      description: '',
      pinned: false
    });
    this.handleGetNotes();
    e.preventDefault();
  };

  handleGetNotes = () => {
    Apis.getNotes().then((response) => {
      this.setState({
        notes: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  handleUpdateNote = (noteId) => {
    console.log(noteId);
  };

  handleDeleteNote = (noteId) => {
    Apis.deleteNote(noteId).then((response) => {
      console.log("success");
    }).catch((error) => {
      console.log('error');
    });
  };

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
                  <Notes 
                    key={index} 
                    note={note} 
                    onUpdate={this.handleUpdateNote} 
                    onDelete={this.handleDeleteNote}
                  />
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
