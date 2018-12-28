import React from 'react';
import '../../css/Modal.scss'

class ModalWrapper extends React.Component{

    handleCloseModal = () => {
        this.props.close();
    };

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    };

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    };

    handleClick = (e) => {
        if(this.node.contains(e.target)){
            console.log('this is the node')
            //the click is inside the main modal
            return;
        }

        //exit the modal if clicking outside the modal
        this.handleCloseModal();
    }

    render(){
        return(
            <div className="modal display-block">
                <div className="modal-main" ref={node => {this.node = node;}}>
                    {this.props.children}
                </div>

                <div className="" onClick={this.handleCloseModal}>
                    X
                </div>
            </div>
        );
    };
}

export default ModalWrapper;