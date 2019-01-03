import React from 'react';
import ModalWrapper from './ModalWrapper';

class CreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          pinned: false
        }
        this.handleSubmit.bind(this);
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

        return(
            <ModalWrapper close={this.props.close}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        title: <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                    </label>
                    <label>description: <input type="test" value={this.state.description} onChange={this.handleDescriptionChange}/></label>
                    <div><button>pinned this</button></div>
                    <input type="submit"/>
                </form>
            </ModalWrapper>
        );
    }

}

export default CreateModal;