//client/component/Notes.jsx
import React from 'react';

class Notes extends React.Component {

    handleUpdateNote = () => {
        let noteId = this.props.note._id;
        this.props.onUpdate(noteId);
    }

    render() {
        return(
            <li>
                <div>
                    <h1>{this.props.note.title}</h1>
                    <p>{this.props.note.description}</p>
                    <p>{this.props.note.updated}</p>
                    <button type="button" onClick={this.handleUpdateNote}>Update</button>
                </div>
            </li>
        );
    }
}

export default Notes;