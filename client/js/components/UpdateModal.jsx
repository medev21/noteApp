import React from 'react';
import ModalWrapper from './ModalWrapper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlus } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip';

library.add(faThumbtack, faPlus)

class UpdateModal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note._id,
            title: this.props.note.title,
            description: this.props.note.description,
            pinned: this.props.note.pinned,
            updated: this.props.note.updated,
            tooltipBool: false
        }
    };

    handleTitleUpdate = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescriptionUpdate = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handlePinnedUpdate = (event) => {
        event.preventDefault();
        this.setState({
            pinned: !this.state.pinned
        });
    }

    handleUpdateNote = (event) => {
        // event.preventDefault();
        let noteId = this.state.id;
        let updatedTitle = this.state.title;
        let updatedDescription = this.state.description;
        let updatedPinned = this.state.pinned;
        this.props.update(event,noteId, updatedTitle, updatedDescription, updatedPinned);
    };

    handleShowTooltip = () => {
        this.setState({tooltipBool: true});
    };

    handleCloseTooltip = () => {
        this.setState({tooltipBool: false});
    };

    render(){
        const isPinned = this.state.pinned;
        const tooltipStatus = this.state.tooltipBool
        let tooltip;

        if(tooltipStatus){
            tooltip = <Tooltip pinBool={isPinned}/>
        }

        return(
            <ModalWrapper close={this.props.close}>
                {/* <p>{this.props.note.title}</p> */}
                <form onSubmit={this.handleUpdateNote}>
                    <div className="pinSection">
                        {tooltip}
                        <FontAwesomeIcon 
                            transform={isPinned ? "rotate-0" : "rotate-45"} 
                            icon="thumbtack" 
                            size="1x" 
                            onClick={this.handlePinnedUpdate} 
                            onMouseOver={this.handleShowTooltip} 
                            onMouseOut={this.handleCloseTooltip}
                        />
                    </div>
                    <div className="titleSection">
                        <input type="text" value={this.state.title} onChange={this.handleTitleUpdate}/>
                    </div>
                    <div className="descriptionSection">
                        <textarea type="text" value={this.state.description} onChange={this.handleDescriptionUpdate}/>
                    </div>
                    <div className="submitSection">
                        <button type="submit">Update</button>
                    </div>
                </form>
            </ModalWrapper>
        );
    }
}

export default UpdateModal;