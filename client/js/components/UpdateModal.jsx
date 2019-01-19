import React from 'react';
import ModalWrapper from './ModalWrapper';

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

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handleUpdateNote = () => {
        let noteId = this.state.id;
        let updatedTitle = this.state.title;
        let updatedDescription = this.state.description;
        let updatedPinned = this.state.pinned;
        this.props.onUpdate(noteId, updatedTitle, updatedDescription, updatedPinned);
    };

    render(){
        return(
            <ModalWrapper close={this.props.close}>
                <p>{this.props.note.title}</p>
            </ModalWrapper>
        );
    }
}

export default UpdateModal;