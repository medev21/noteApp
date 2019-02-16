import React from 'react';
import ModalWrapper from './ModalWrapper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip';

library.add(faThumbtack, faPlus)

class CreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          pinned: false,
          tooltipBool: false
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
        // event.preventDefault();
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
                <form onSubmit={this.handleSubmit}>
                    <div className="pinSection">
                        {/* <button onClick={this.handlePinnedChange}><FontAwesomeIcon transform={isPinned ? "rotate-0" : "rotate-45"} icon="thumbtack" size="1x"/></button> */}
                        {tooltip}
                        <FontAwesomeIcon 
                            transform={isPinned ? "rotate-0" : "rotate-45"} 
                            icon="thumbtack" 
                            size="1x" 
                            onClick={this.handlePinnedChange} 
                            onMouseOver={this.handleShowTooltip} 
                            onMouseOut={this.handleCloseTooltip}
                        />
                    </div>
                    <div className="titleSection">
                        <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div className="descriptionSection">
                        <textarea type="text" placeholder="description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div className="submitSection">
                        <button type="submit">Create</button>
                    </div>
                </form>
            </ModalWrapper>
        );
    }

}

export default CreateModal;