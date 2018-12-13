//client/component/Notes.jsx
import React from 'react';

class Notes extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: this.props.note._id,
    //         title: this.props.note.title,
    //         description: this.props.note.description,
    //         pinned: this.props.note.pinned,
    //         updated: this.props.note.updated
    //     }
    // };

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handleUpdateNote = () => {
        let noteId = this.state.id;
        let updatedTitle = this.state.title;
        let updatedDescription = this.state.description;
        let updatedPinned = this.state.pinned;
        this.props.onUpdate(noteId, updatedTitle, updatedDescription, updatedPinned);
    }

    handleDeleteNote = (note, index) => {
        this.props.onDelete(note._id, index);
    }

    render() {
        let notes = this.props.notes.map((note, index) => {
            return (
                // <li key={index}>{note.title}</li>
                <li key={index}>
                    <div>
                        <input onChange={this.handleTitle} value={note.title}/>
                        <input onChange={this.handleDescription} value={note.description}/>
                        <input readOnly value={note.updated}/>
                        <button type="button" onClick={this.handleUpdateNote}>Update</button>
                        <button type="button" onClick={this.handleDeleteNote.bind(this, note, index)}>Delete</button>
                    </div>
                </li>
            );
        });

        return(
            <ul>{notes}</ul>
        );
    }
}

export default Notes;