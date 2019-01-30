import React from 'react';
import ModalConductor from './ModalConductor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faThumbtack)

class NoteItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note._id,
            title: this.props.note.title,
            description: this.props.note.description,
            pinned: this.props.note.pinned,
            updated: this.props.note.updated,
            modalName: null
        }
    };

    handleShowModal = () => {
        this.setState({modalName: "UPDATE_NOTE"});
    };

    handleCloseModal = () => {
        this.setState({
            modalName: null
        });
    };

    // handleTitle = (event) => {
    //     this.setState({
    //         title: event.target.value
    //     });
    // };

    // handleDescription = (event) => {
    //     this.setState({
    //         description: event.target.value
    //     });
    // };

    // handleUpdateNote = () => {
    //     let noteId = this.state.id;
    //     let updatedTitle = this.state.title;
    //     let updatedDescription = this.state.description;
    //     let updatedPinned = this.state.pinned;
    //     this.props.onUpdate(noteId, updatedTitle, updatedDescription, updatedPinned);
    // };

    handleUpdatePin = (e) => {
        //this stops from parent modal to be enabled - stopPropagation
        e.stopPropagation();
        console.log('updating pin....')
    };

    handleDeleteNote = (e) => {
        //this stops from parent modal to be enabled - stopPropagation
        e.stopPropagation();
        this.props.onDelete(this.state.id);
    };

    render() {

        const isPinned = this.state.pinned;

        return(
            <div className="noteCard" onClick={this.handleShowModal}>
                <div className="header">
                    <FontAwesomeIcon 
                        transform={isPinned ? "rotate-0" : "rotate-45"} 
                        icon={['fa', 'thumbtack']} 
                        size="1x" 
                        onClick={this.handleUpdatePin}
                    />
                </div>
                <div className="body">
                    <div className="titleSection">
                        <h4>{this.state.title}</h4>
                    </div>
                    <div className="descriptionSection">
                        <p>{this.state.description}</p>
                    </div>
                </div>
                <div className="footer">
                    <FontAwesomeIcon icon='trash' size="1x" onClick={this.handleDeleteNote}/>
                </div>
                
                {/* <input readOnly value={this.state.updated}/> */}
                {/* <input onChange={this.handleTitle} value={this.state.title}/>
                <input onChange={this.handleDescription} value={this.state.description}/>
                <input readOnly value={this.state.updated}/>
                <button type="button" onClick={this.handleUpdateNote}>Update</button>
                <button type="button" onClick={this.handleDeleteNote}>Delete</button> */}

                <ModalConductor 
                    close={this.handleCloseModal} 
                    modalName={this.state.modalName}
                    note={this.props.note}
                    submit={this.handleSubmit}
                />
            </div>
        )
    }

}

export default NoteItem;