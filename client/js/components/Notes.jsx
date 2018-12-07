//client/component/Notes.jsx
import React from 'react';

class Notes extends React.Component {

    render() {
        return(
            <li>
                <div>
                    <h1>{this.props.note.title}</h1>
                    <p>{this.props.note.description}</p>
                    <p>{this.props.note.updated}</p>
                </div>
            </li>
        );
    }
}

export default Notes;