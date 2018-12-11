//client/component/Notes.jsx
import React from 'react';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          pinned: false
        }
      };

    handleUpdateNote = () => {
        let noteId = this.props.note._id;
        this.props.onUpdate(noteId);
    }

    handleDeleteNote = () => {
        let noteId = this.props.note._id;
        this.props.onDelete(noteId);
    }

    render() {
        return(
            <li>
                <div>
                    <input value={this.props.note.title}/>
                    <input value={this.props.note.description}/>
                    <p>{this.props.note.updated}</p>
                    <button type="button" onClick={this.handleUpdateNote}>Update</button>
                    <button type="button" onClick={this.handleDeleteNote}>Delete</button>
                </div>
            </li>
        );
    }
}

export default Notes;