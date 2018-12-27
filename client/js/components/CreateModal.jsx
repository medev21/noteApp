import React from 'react';
import ModalWrapper from './ModalWrapper';

class CreateModal extends React.Component {

    render(){

        return(

            <ModalWrapper close={this.props.close}>
                    <p>this is the create Modal</p>
            </ModalWrapper>
        );
    }

}

export default CreateModal;