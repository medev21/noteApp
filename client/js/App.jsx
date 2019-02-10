import React, { Component } from 'react';
import '../css/App.scss';
import Apis from './utils/Apis';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  };

  handleSubmitNote = (event,title,description,pinned) => {
    Apis.postNote(title, description, pinned).then((response) => {
      if(response.status === 200){
        this.handleGetNotes();
      }
    }).catch((error) => {
      console.log("App.jsx post note error - ", error)
    });
    event.preventDefault();
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

  handleUpdateNote = (event, noteId, updatedTitle, updatedDescription, updatedPinned) => {
    Apis.updateNote(noteId, updatedTitle, updatedDescription, updatedPinned)
    .then((response) => {
      if(response.status === 200){
        this.handleGetNotes();
      }
    }).catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  };

  handleDeleteNote = (noteId,index) => {
    //Call DELETE API
    Apis.deleteNote(noteId).then((response) => {
      if(response.status === 200){
        this.state.notes.splice(index,1);

        this.handleGetNotes();
        console.log('it has been deleted')
        //add a message
      }else{
        console.log("something happened")
      }
    }).catch((error) => {
      console.log('error on delete ', error);
    });

  };

  componentDidMount = () => {
    this.handleGetNotes();
  };

  render() {

    return (
      <div className="appContainer">
        <Navbar />
        <Notes 
          notes={this.state.notes} 
          onUpdate={this.handleUpdateNote} 
          onDelete={this.handleDeleteNote}
          submit={this.handleSubmitNote}
        />
        {/* <AddNote submit={this.handleSubmitNote}/> */}
      </div>
    );
  }
}

export default App;
