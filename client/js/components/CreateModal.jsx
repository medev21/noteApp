import React from 'react';
import ModalWrapper from './ModalWrapper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbtack, faPlus)

class CreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          pinned: false
        }
        this.handleSubmit.bind(this);
        // this.handlePinnedChange.bind(this);
      };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handlePinnedChange = (event) => {
        event.preventDefault();
        this.setState({
            pinned: !this.state.pinned
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let title = this.state.title;
        let description = this.state.description;
        let pinned = this.state.pinned;
        this.props.submit(event,title,description,pinned);
        this.setState({
            title: '',
            description: '',
            pinned: false
        });
    }

    render(){
        const isPinned = this.state.pinned;

        return(
            <ModalWrapper close={this.props.close}>
                <form onSubmit={this.handleSubmit}>
                    <div className="pinSection">
                        <button onClick={this.handlePinnedChange}><FontAwesomeIcon transform={isPinned ? "rotate-0" : "rotate-45"} icon="thumbtack" size="1x"/></button>
                    </div>
                    <div className="titleSection">
                        <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div className="descriptionSection">
                        <textarea type="text" placeholder="description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div className="submitSection">
                        <button onClick={this.handlePinnedChange}><FontAwesomeIcon icon="plus" size="1x"/></button>
                        {/* <input type="submit"/> */}
                    </div>
                </form>
            </ModalWrapper>
        );
    }

}

export default CreateModal;