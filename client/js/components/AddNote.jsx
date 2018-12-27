//client/component/Add.jsx
import React from 'react';

class Add extends React.Component {

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

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        title: <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                    </label>
                    <label>description: <input type="test" value={this.state.description} onChange={this.handleDescriptionChange}/></label>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Add;