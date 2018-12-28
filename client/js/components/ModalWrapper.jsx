import React from 'react';
import '../../css/Modal.scss'

class ModalWrapper extends React.Component{

    handleCloseModal = () => {
        this.props.close();
    }

    render(){
        return(
            <div className="modal display-block">
                <div className="modal-main">
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