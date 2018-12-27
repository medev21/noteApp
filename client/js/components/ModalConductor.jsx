import React from 'react';

import CreateModal from './CreateModal';
// import UpdateModal from './UpdateModal';

const ModalConductor = props => {
  switch (props.modalName) {
    case 'CREATE_NOTE':
        console.log('create note');
        return <CreateModal {...props}/>;

    case 'UPDATE_NOTE':
        return <UpdateModal {...props}/>;

    default:
        return null;
  }
};

export default ModalConductor;