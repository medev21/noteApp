import React from 'react';

import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';

const ModalConductor = props => {
    console.log(props);
  switch (props.modalName) {
    case 'CREATE_NOTE':
        return <CreateModal {...props}/>;

    case 'UPDATE_NOTE':
        return <UpdateModal {...props}/>;

    default:
        return null;
  }
};

export default ModalConductor;