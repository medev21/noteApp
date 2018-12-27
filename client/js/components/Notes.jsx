//client/component/Notes.jsx
import React from 'react';
import NoteItem from './NoteItem';
import Modal from './CreateModal';
import '../../css/Notes.scss';
import ModalConductor from './ModalConductor';

class Notes extends React.Component {

    constructor(){
        this.state = {
            showAddModal: false
        }
    }

    handleModalToggle = () => {
        this.setState({
            showAddModal: true
        });
    }

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

                {/* <Modal /> */}

                <div className="addNoteSection">
                    +
                </div>

                <ModalConductor show={this.state.showAddModal} close={this.handleModalToggle}/>
            </div>
            
        );
    }
}

export default Notes;