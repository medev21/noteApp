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
      if(response.status === 200){
        this.handleGetNotes();
      }
    }).catch((error) => {
      console.log("App.jsx post note error - ", error)
    });

    this.setState({
      title: '',
      description: '',
      pinned: false
    });
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

  handleUpdateNote = (noteId, updatedTitle, updatedDescription, updatedPinned) => {
    Apis.updateNote(noteId, updatedTitle, updatedDescription, updatedPinned)
    .then((response) => {
      if(response.status === 200){
        this.handleGetNotes();
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  handleDeleteNote = (noteId, index) => {
    //slice note from note array
    console.log(noteId);

    //Call DELETE API
    // Apis.deleteNote(noteId).then((response) => {
    //   if(response.status === 200){
    //     this.handleGetNotes();
    //     //add a message
    //   }else{
    //     console.log("something happened")
    //   }
    // }).catch((error) => {
    //   console.log('error on delete ', error);
    // });
  };

  componentDidMount = () => {
    this.handleGetNotes();
  };

  render() {

    let notes = this.state.notes;
    return (
      <div className="App">

        <div>
          <Notes 
            notes={this.state.notes} 
            onUpdate={this.handleUpdateNote} 
            onDelete={this.handleDeleteNote}
          />
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
