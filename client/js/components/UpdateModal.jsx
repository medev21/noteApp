import React from 'react';
import ModalWrapper from './ModalWrapper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbtack, faPlus)

class UpdateModal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note._id,
            title: this.props.note.title,
            description: this.props.note.description,
            pinned: this.props.note.pinned,
            updated: this.props.note.updated
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

    handleUpdateNote = () => {
        let noteId = this.state.id;
        let updatedTitle = this.state.title;
        let updatedDescription = this.state.description;
        let updatedPinned = this.state.pinned;
        this.props.update(noteId, updatedTitle, updatedDescription, updatedPinned);
    };

    render(){
        const isPinned = this.state.pinned;

        return(
            <ModalWrapper close={this.props.close}>
                {/* <p>{this.props.note.title}</p> */}
                <form onSubmit={this.handleUpdateNote}>
                    <div className="pinSection">
                        <button onClick={this.handlePinnedUpdate}><FontAwesomeIcon transform={isPinned ? "rotate-0" : "rotate-45"} icon="thumbtack" size="1x"/></button>
                    </div>
                    <div className="titleSection">
                        <input type="text" value={this.state.title} onChange={this.handleTitleUpdate}/>
                    </div>
                    <div className="descriptionSection">
                        <textarea type="text" value={this.state.description} onChange={this.handleDescriptionUpdate}/>
                    </div>
                    <div className="submitSection">
                        <button type="submit"><FontAwesomeIcon icon="plus" size="1x"/></button>
                    </div>
                </form>
            </ModalWrapper>
        );
    }
}

export default UpdateModal;