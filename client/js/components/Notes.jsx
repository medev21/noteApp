//client/component/Notes.jsx
import React from 'react';
import UpdateNote from './UpdateNote';

class Notes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.notes
            // index: this.props.index,
            // id: this.props.note._id,
            // title: this.props.note.title,
            // description: this.props.note.description,
            // pinned: this.props.note.pinned,
            // updated: this.props.note.updated
        }
        this.handleTitle = this.handleTitle.bind(this);
    };

    handleTitle = (event) => {
        // this.setState({
        //     title: event.target.value
        // });

        console.log(event.target.value);
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

    handleDeleteNote = (noteId) => {
        this.props.onDelete(noteId);
    }

    render() {
        console.log(this.state.notes);
        return (

            notes.map((note,index) => {
                return (
                <li key={index}>
                    <div>
                        <input onChange={this.handleTitle} value={note.title}/>
                        <input onChange={this.handleDescription} value={note.description}/>
                        <input readOnly value={note.updated}/>
                        <button type="button" onClick={this.handleUpdateNote}>Update</button>
                        <button type="button" onClick={this.handleDeleteNote.bind(this,note._id)}>Delete</button>
                    </div>
                </li>
                )
            })

            // <div>
            //     <input onChange={this.handleTitle} value={this.state.title}/>
            //     <input onChange={this.handleDescription} value={this.state.description}/>
            //     <input readOnly value={this.state.updated}/>
            //     <button type="button" onClick={this.handleUpdateNote}>Update</button>
            //     <button type="button" onClick={this.handleDeleteNote}>Delete</button>
            // </div>
        );
    }
}

export default Notes;