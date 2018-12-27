import React from 'react';
import '../../css/Modal.scss'

class CreateModal extends React.Component {

    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return(
            <div className={showHideClassName}>
                <div className="modal-main">
                    <p>this is the create Modal</p>
                </div>
            </div>
        );
    }

}

export default CreateModal;