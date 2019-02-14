import React, { Component } from 'react';
import '../../css/App.scss';
import Apis from '../utils/Apis';
import Notes from './Notes';
import Navbar from './Navbar';
import {Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      redirectTo: false
    }
  };

  handleSubmitNote = (event,title,description,pinned) => {
    const config = this.handleGetSession();
    Apis.postNote(title, description, pinned, config).then((response) => {
      if(response.status === 200){
        this.handleGetNotes(config);
      }
    }).catch((error) => {
      console.log("App.jsx post note error - ", error)
    });
    event.preventDefault();
  };

  handleGetNotes = (config) => {
    Apis.getNotes(config).then((response) => {
      this.setState({
        notes: response.data
      });
    }).catch((error) => {
      sessionStorage.getItem('userData','');
      sessionStorage.clear();
      this.setState({redirectTo: true});
    });
  };

  handleUpdateNote = (event, noteId, updatedTitle, updatedDescription, updatedPinned) => {
    const config = this.handleGetSession();
    Apis.updateNote(noteId, updatedTitle, updatedDescription, updatedPinned, config)
    .then((response) => {
      if(response.status === 200){
        this.handleGetNotes(config);
      }
    }).catch((error) => {
      console.log(error);
    });
    event.preventDefault();
  };

  handleDeleteNote = (noteId,index) => {
    const config = this.handleGetSession();
    Apis.deleteNote(noteId, config).then((response) => {
      if(response.status === 200){
        this.state.notes.splice(index,1);

        this.handleGetNotes(config);
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
    const session = sessionStorage.getItem('userData');
    const isSession = session != '' && session != null ? true : false;
    if(isSession){
      const config = this.handleGetSession();
      this.handleGetNotes(config);
    }else{
      this.setState({redirectTo: true});
    }
  };

  handleGetSession = () => {
    const session = JSON.parse(sessionStorage.getItem('userData'));
    const token = session.token;
    const config = { headers: { Authorization: `Bearer ${token}`}}

    return config
  };

  render() {
    const isHome = this.state.redirectTo;
    if(isHome){
      return <Redirect to="/"/>
    }

    return (
      <div className="appContainer">
        <Navbar />
        <Notes 
          notes={this.state.notes} 
          onUpdate={this.handleUpdateNote} 
          onDelete={this.handleDeleteNote}
          submit={this.handleSubmitNote}
        />
      </div>
    );
  }
}

export default Home;