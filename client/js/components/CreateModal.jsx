import React from 'react';
import '../../css/Modal.scss'

class CreateModal extends React.Component {

    handleCloseModal = () => {
        this.props.close();
    }

    render(){
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

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
    }

}

export default CreateModal;