import React from 'react';
import ModalWrapper from './ModalWrapper';

class UpdateModal extends React.Component{

    render(){
        return(
            <ModalWrapper close={this.props.close}>
                <h1>Hello world</h1>
            </ModalWrapper>
        );
    }
}

export default UpdateModal;