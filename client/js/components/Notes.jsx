//client/component/Notes.jsx
import React from 'react';
import NoteItem from './NoteItem';
import '../../css/Notes.scss';
import ModalConductor from './ModalConductor';

class Notes extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modalName: null
        }
    }

    handleShowModal = () => {
        this.setState({
            modalName: "CREATE_NOTE"
        });
    };

    handleCloseModal = () => {
        this.setState({
            modalName: null
        });
    };

    handleSubmit = (event,title,description,pinned) => {
        this.handleCloseModal();
        this.props.submit(event,title,description,pinned);
    }

    render() {
        let notes = this.props.notes;
        let pinned = notes.filter(note => note.pinned == true);
        let other = notes.filter(note => note.pinned == false);
        let pinnedSection;

        if(pinned.length != 0){
            pinnedSection = 
                <div className="pinnedSection">
                    <h5>pinned</h5>
                    <ul>
                        {pinned.map((note) => {
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
            ;
        }else{
            pinnedSection = null;
        }
        // console.log("pinned", pinned);
        // console.log("other", other);
        return (
            <div className="notesContainer">
                <div className="notesSection">
                    {pinnedSection}
                    <div className="otherSection">
                        <h5 className={pinned.length != 0 ? 'showHeader' : 'hideHeader'}>other</h5>
                        <ul>
                            {other.map((note) => {
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
                </div>

                <div className="addButtonSection" onClick={this.handleShowModal}>
                    +
                </div>

                <ModalConductor 
                    close={this.handleCloseModal} 
                    modalName={this.state.modalName}
                    submit={this.handleSubmit}
                />
            </div>
            
        );
    }
}

export default Notes;