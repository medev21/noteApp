//client/component/Notes.jsx
import React from 'react';
import UpdateNote from './UpdateNote';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note._id,
            title: this.props.note.title,
            description: this.props.note.description,
            pinned: this.props.note.pinned,
            updated: this.props.note.updated
        }
    };

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

    handleDeleteNote = (note) => {
        this.props.onDelete(note._id);
    }

    render() {
        return (
            <div>
                <input onChange={this.handleTitle} value={this.state.title}/>
                <input onChange={this.handleDescription} value={this.state.description}/>
                <input readOnly value={this.state.updated}/>
                <button type="button" onClick={this.handleUpdateNote}>Update</button>
                {/* <button type="button" onClick={this.handleDeleteNote.bind(this, index)}>Delete</button> */}
            </div>
        );
    }
}

export default Notes;