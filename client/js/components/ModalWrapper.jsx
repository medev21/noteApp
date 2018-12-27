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
                    <p>this is the create Modal</p>
                </div>

                <div className="" onClick={this.handleCloseModal}>
                    X
                </div>
            </div>
        );
    };
}

export default ModalWrapper;