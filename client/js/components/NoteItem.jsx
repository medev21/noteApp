import React from 'react';
import ModalConductor from './ModalConductor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip';

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
            modalName: null,
            tooltipBool: false
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

    handleUpdatePin = (e) => {
        //this stops from parent modal to be enabled - stopPropagation
        e.stopPropagation();
        //refactor this part
        let noteId = this.state.id;
        let updatedTitle = this.state.title;
        let updatedDescription = this.state.description;
        let updatedPinned = !this.state.pinned;
        this.handleUpdate(e,noteId, updatedTitle, updatedDescription, updatedPinned);
    };

    handleUpdate = (event, noteId, updatedTitle, updatedDescription, updatedPinned) => {
        this.setState({
            title: updatedTitle,
            description: updatedDescription,
            pinned: updatedPinned
        });
        this.handleCloseModal();
        this.props.onUpdate(event, noteId, updatedTitle, updatedDescription, updatedPinned);
    };

    handleDeleteNote = (e) => {
        //this stops from parent modal to be enabled - stopPropagation
        e.stopPropagation();
        this.props.onDelete(this.state.id);
    };

    handleShowTooltip = () => {
        this.setState({tooltipBool: true});
    };

    handleCloseTooltip = () => {
        this.setState({tooltipBool: false});
    };

    render() {

        const isPinned = this.state.pinned;
        const tooltipStatus = this.state.tooltipBool
        let tooltip;

        if(tooltipStatus){
            tooltip = <Tooltip pinBool={isPinned}/>
        }

        return(
            <div className="noteCard" onClick={this.handleShowModal}>
                <div className="header">
                    {tooltip}
                    <FontAwesomeIcon 
                        transform={isPinned ? "rotate-0" : "rotate-45"} 
                        icon={['fa', 'thumbtack']} 
                        size="1x" 
                        onClick={this.handleUpdatePin} 
                        onMouseOver={this.handleShowTooltip} 
                        onMouseOut={this.handleCloseTooltip}
                    >
                    </FontAwesomeIcon>                  
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
                
                <ModalConductor 
                    close={this.handleCloseModal} 
                    modalName={this.state.modalName}
                    note={this.props.note}
                    update={this.handleUpdate}
                />
            </div>
        )
    }

}

export default NoteItem;