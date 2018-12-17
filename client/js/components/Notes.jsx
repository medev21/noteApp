//client/component/Notes.jsx
import React from 'react';
import UpdateNote from './UpdateNote';
import NoteItem from './NoteItem';

class Notes extends React.Component {

    render() {
        let notes = this.props.notes;
        return (
            <ul>
                {notes.map((note,index) => {
                    return (
                        <li key={note._id}>
                            <NoteItem 
                                note={note} 
                                onUpdate={this.props.onUpdate} 
                                onDelete={this.props.onDelete}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Notes;