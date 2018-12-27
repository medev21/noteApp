import React from 'react';

import CreateModal from './CreateModal';
import UpdateModal from './UpdateModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'CREATE_NOTE':
      return <CreateModal {...props}/>;

    case 'UPDATE_NOTE':
      return <UpdateModal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;