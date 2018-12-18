//client/component/Notes.jsx
import React from 'react';
import NoteItem from './NoteItem';
import '../../css/Notes.scss';

class Notes extends React.Component {

    render() {
        let notes = this.props.notes;
        return (
            <div className="noteListSection">
                <div>
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
                </div>

                <div className="addNoteSection">
                    +
                </div>
            </div>
            
        );
    }
}

export default Notes;