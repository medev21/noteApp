//client/component/Notes.jsx
import React from 'react';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: this.props.note.title,
          description: this.props.note.title,
          pinned: this.props.note.pinned
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
                    <input value={this.state.title}/>
                    <input value={this.state.description}/>
                    <p>{this.props.note.updated}</p>
                    <button type="button" onClick={this.handleUpdateNote}>Update</button>
                    <button type="button" onClick={this.handleDeleteNote}>Delete</button>
                </div>
            </li>
        );
    }
}

export default Notes;