import React from 'react';

import CreateModal from './CreateModal.jsx';
import UpdateModal from './UpdateModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'EXPORT_DATA':
      return <CreateModal {...props}/>;

    case 'SOCIAL_SIGN_IN':
      return <UpdateModal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;