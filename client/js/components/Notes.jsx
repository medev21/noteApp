//client/component/Notes.jsx
import React from 'react';
import NoteItem from './NoteItem';

class Notes extends React.Component {

    render() {
        let notes = this.props.notes;
        return (
            <ul>
                {notes.map((note) => {
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