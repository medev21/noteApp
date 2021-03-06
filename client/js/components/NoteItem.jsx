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
            tooltipBool: false,
            tooltipMsg: ''
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

    handleShowTooltip = (e) => {
        let icon = e.currentTarget.getAttribute("name");
        this.setState({
            tooltipBool: true,
            tooltipMsg: icon
        });
    };

    handleCloseTooltip = () => {
        this.setState({
            tooltipBool: false,
            tooltipMsg: ''
        });
    };

    render() {

        const isPinned = this.state.pinned;
        const tooltipStatus = this.state.tooltipBool
        const tooltipMsg = this.state.tooltipMsg
        let tooltipPin;
        let tooltipDelete;

        if(tooltipStatus){
            if(tooltipMsg == 'Delete')
                tooltipDelete = <Tooltip icon={tooltipMsg} position="tooltipBottom"/>
            else{
                const pinMsg = isPinned ? "Unpin note" : "Pin note";
                tooltipPin = <Tooltip icon={pinMsg} position="tooltipTop"/>
            }
        }

        return(
            <div className="noteCard" onClick={this.handleShowModal}>
                <div className="header">
                    {tooltipPin}
                    <FontAwesomeIcon 
                        transform={isPinned ? "rotate-0" : "rotate-45"} 
                        icon={['fa', 'thumbtack']} 
                        size="1x" 
                        onClick={this.handleUpdatePin} 
                        onMouseOver={this.handleShowTooltip} 
                        onMouseOut={this.handleCloseTooltip} 
                        name="pin"
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
                    {tooltipDelete}
                    <FontAwesomeIcon 
                        icon='trash' 
                        size="1x" 
                        onClick={this.handleDeleteNote} 
                        onMouseOver={this.handleShowTooltip} 
                        onMouseOut={this.handleCloseTooltip}  
                        name="Delete"
                    />
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