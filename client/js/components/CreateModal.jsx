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

        return(
            <ModalWrapper close={this.props.close}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <button onClick={this.handlePinnedChange}>pinned this</button>
                    </div>
                    <div>
                        <input type="text" placeholder="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div>
                        <input type="test" placeholder="description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </ModalWrapper>
        );
    }

}

export default CreateModal;